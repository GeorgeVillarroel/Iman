import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { ResetPasswordDTO } from './dto/edit-password.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const uuidApiKey = v4();
    const user = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      apiKey: uuidApiKey,
    });

    try {
      return await user.save();
    } catch (e) {
      throw new InternalServerErrorException('Bad server' + e);
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      {
        returnDocument: 'after',
      },
    );
    if (!updatedUser) {
      throw new NotFoundException('User not found ');
    }
    return updatedUser;
  }

  async updatePw(
    id: string,
    resetPasswordDTO: ResetPasswordDTO,
  ): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found ');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(
      resetPasswordDTO.newPassword,
      salt,
    );
    user.password = hashedPassword;
    return await user.save();
  }

  async enable2FA(id: string, secret: string): Promise<{ secret: string }> {
    const user = await this.userModel.findById(id).select('+twoFASecret');
    if (!user) {
      throw new NotFoundException('User not found ');
    }
    user.twoFASecret = secret;
    user.twoFAEnabled = true;
    await user.save();
    return { secret: secret };
  }

  async disable2FA(id: string): Promise<{ secret: string }> {
    const user = await this.userModel.findById(id).select('+twoFASecret');
    if (!user) {
      throw new NotFoundException('User not found ');
    }
    user.twoFASecret = '';
    user.twoFAEnabled = false;
    await user.save();
    return { secret: user.twoFASecret };
  }

  async findByApiKey(apiKey: string): Promise<User> {
    const user = await this.userModel.findOne({ apiKey: apiKey });
    if (!user) {
      throw new NotFoundException('User not found ');
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByIdForSecrets(id: string): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .select('+twoFASecret')
      .lean();

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> {
    return await this.userModel
      .findOne({
        $or: [
          { username: usernameOrEmail },
          { email: usernameOrEmail.toLowerCase() },
        ],
      })
      .select('+password')
      .exec();
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }

    // add cascade
    return deletedUser;
  }
}
