import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDTO } from './dto/login-auth.dto';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { ResetPasswordAuthDTO } from './dto/reset-password-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signup(@Body() signupAuthDTO: SignupAuthDto) {}

  @Post()
  async login(@Body() loginAuthDTO: LoginAuthDTO) {}

  @Post()
  async forgotPassword(@Body() forgotPasswordDTO: ResetPasswordAuthDTO) {}
}
