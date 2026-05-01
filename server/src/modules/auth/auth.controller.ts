import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDTO } from './dto/login-auth.dto';
import { ResetPasswordAuthDTO } from './dto/reset-password-auth.dto';
import { ApiUsers } from '../users/docs/users.docs';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/schemas/user.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { PayloadUser } from 'src/common/decorators/user.decorator';
import { ValidateTokenDTO } from './dto/validate-token.dto';

@Controller('users/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('signup')
  @ApiUsers.Create()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  @Post('login')
  async login(
    @Body() loginAuthDTO: LoginAuthDTO,
  ): Promise<
    | { accessToken: string }
    | { validate2FA: string; message: string; token: string }
  > {
    return await this.authService.login(loginAuthDTO);
  }

  @Post('validate-2fa')
  async validate2FA(
    @Body() validateTokenDTO: ValidateTokenDTO,
  ): Promise<{ accessToken: string } | { verified: boolean }> {
    return this.authService.validate2FAToken(
      validateTokenDTO.jwt,
      validateTokenDTO.token,
    );
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async forgotPassword(@Body() forgotPasswordDTO: ResetPasswordAuthDTO) {}
}
