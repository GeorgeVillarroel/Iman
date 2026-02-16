import { Injectable } from '@nestjs/common';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { LoginAuthDTO } from './dto/login-auth.dto';
import { ResetPasswordAuthDTO } from './dto/reset-password-auth.dto';

@Injectable()
export class AuthService {
  signup(signupAuthDto: SignupAuthDto) {
    return 'This action adds a new auth';
  }

  login(LoginAuthDTO: LoginAuthDTO) {
    return `This action returns all auth`;
  }
  resetPassword(ResetPasswordDTO: ResetPasswordAuthDTO) {
    return `This resets password`;
  }
}
