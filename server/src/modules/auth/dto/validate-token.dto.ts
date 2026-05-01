import { IsNotEmpty, IsString } from 'class-validator';

export class ValidateTokenDTO {
  @IsNotEmpty()
  @IsString()
  jwt: string;
  @IsNotEmpty()
  @IsString()
  token: string;
}
