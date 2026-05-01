import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginAuthDTO } from './dto/login-auth.dto';
import { ResetPasswordAuthDTO } from './dto/reset-password-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { PayloadType } from './types/types';
import * as speakeasy from 'speakeasy';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(
    loginAuthDTO: LoginAuthDTO,
  ): Promise<
    | { accessToken: string }
    | { validate2FA: string; message: string; token: string }
  > {
    const user = await this.usersService.findByUsernameOrEmail(
      loginAuthDTO.usernameOrEmail,
    );
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const passwordMatched = await bcrypt.compare(
      loginAuthDTO.password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException('Password does not match');
    }

    if (user.twoFAEnabled && user.twoFASecret != '') {
      const tempPayload: PayloadType = {
        email: user.email,
        userId: user._id.toString(),
      };
      const tempToken = this.jwtService.sign(tempPayload, { expiresIn: '5m' });

      return {
        validate2FA: 'http://localhost:3000/users/auth/validate-2fa',
        message: 'Please send the OTP from your 2fa Auth',
        token: tempToken,
      };
    }

    const payload: PayloadType = {
      email: user.email,
      userId: user._id.toString(),
    };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async validate2FAToken(
    jwt: string,
    token: string,
  ): Promise<{ accessToken: string } | { verified: boolean }> {
    try {
      const tempPayload: PayloadType = this.jwtService.verify(jwt);
      jwt = tempPayload.userId;

      const user = await this.usersService.findByIdForSecrets(jwt);
      if (user.twoFASecret == '') {
        throw new UnauthorizedException();
      }
      const verified = speakeasy.totp.verify({
        secret: user.twoFASecret,
        token: token,
        encoding: 'base32',
      });
      const payload: PayloadType = {
        email: user.email,
        userId: user._id.toString(),
      };

      if (verified) {
        return { accessToken: this.jwtService.sign(payload) };
      } else {
        return { verified: false };
      }
    } catch (err) {
      throw new UnauthorizedException('Error verifying token' + err);
    }
  }

  resetPassword(ResetPasswordDTO: ResetPasswordAuthDTO) {
    return `This resets password`;
  }
}
