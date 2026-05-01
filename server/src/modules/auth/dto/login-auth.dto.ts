import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDTO {
  @IsNotEmpty()
  @IsString()
  readonly usernameOrEmail: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
