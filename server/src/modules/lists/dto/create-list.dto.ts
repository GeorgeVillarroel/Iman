import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateListDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
  cover?: string;
  @IsString()
  @IsOptional()
  order?: string;
}
