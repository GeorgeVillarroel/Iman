import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCardDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  cover?: string;
  @IsString()
  @IsOptional()
  parentId?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  order?: string;
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
