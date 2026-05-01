import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ResetPasswordDTO {
  @IsString()
  @IsOptional()
  currentPassword?: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}
