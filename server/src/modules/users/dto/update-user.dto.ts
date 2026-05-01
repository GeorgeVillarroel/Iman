import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  profilePic?: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsBoolean()
  @IsOptional()
  isPrivate?: boolean;
}
