import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Enable2FAType } from '../auth/types/types';
import * as speakeasy from 'speakeasy';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class SettingsService {
  constructor(private readonly usersService: UsersService) {}

  async enable2FA(userId: string): Promise<Enable2FAType> {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.twoFAEnabled) {
      return { secret: user.twoFASecret };
    }
    const secret = speakeasy.generateSecret();
    console.log(secret);
    const userEnabled = await this.usersService.enable2FA(
      user._id.toString(),
      secret.base32,
    );
    return userEnabled;
  }

  async disable2FA(userId: string): Promise<{ secret: string }> {
    const update2FA = await this.usersService.disable2FA(userId);
    if (!update2FA) {
      throw new UnauthorizedException();
    }
    return update2FA;
  }

  async validateUserByApiKey(apiKey: string): Promise<User> {
    const user = await this.usersService.findByApiKey(apiKey);
    return user;
  }
  /* 
  async updatePw(id: string, password: string): Promise<User> {
    const user = await this.usersService.updatePw(id, password);
    return user;
  } */
  /* 
  async delete(id: string): Promise<User> {
    const user = await this.usersService.remove(id);
    return user;
  } */
}
