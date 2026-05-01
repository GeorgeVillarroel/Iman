import { PartialType } from '@nestjs/swagger';
import { CreateBoardDTO } from './create-board.dto';

export class UpdateBoardDTO extends PartialType(CreateBoardDTO) {}
