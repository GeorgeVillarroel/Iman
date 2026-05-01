import { PartialType } from '@nestjs/swagger';
import { CreateListDTO } from './create-list.dto';

export class UpdateListDTO extends PartialType(CreateListDTO) {}
