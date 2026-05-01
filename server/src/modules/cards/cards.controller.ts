import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDTO } from './dto/create-card.dto';
import { UpdateCardDTO } from './dto/update-card.dto';
import { PayloadUser } from 'src/common/decorators/user.decorator';
import {
  BoardRolesGuard,
  WorkspaceRolesGuard,
} from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { BoardRoles } from 'src/common/decorators/board-role.decorator';
import { ERole } from 'src/common/interfaces/shared.interfaces';

@Controller('w/:w/b/:b/l/:l/cards')
@UseGuards(JwtAuthGuard, WorkspaceRolesGuard, BoardRolesGuard)
@BoardRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER, ERole.GUEST)
export class CardsController {
  constructor(private readonly cardService: CardsService) {}

  @Post()
  create(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('l') listId: string,
    @PayloadUser('userId') userId: string,
    @Body() createCardDTO: CreateCardDTO,
  ) {
    return this.cardService.create(
      userId,
      workspaceId,
      boardId,
      listId,
      createCardDTO,
    );
  }

  @Get()
  findAll(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('l') listId: string,
  ) {
    return this.cardService.findAll(workspaceId, boardId, listId);
  }

  @Get(':id')
  findOne(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('l') listId: string,
    @Param('id') id: string,
  ) {
    return this.cardService.findOne(workspaceId, boardId, listId, id);
  }

  @Patch(':id')
  update(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('l') listId: string,
    @Param('id') id: string,
    @Body() updateCardDTO: UpdateCardDTO,
  ) {
    return this.cardService.update(
      workspaceId,
      boardId,
      listId,
      id,
      updateCardDTO,
    );
  }

  @Delete(':id')
  remove(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('l') listId: string,
    @Param('id') id: string,
  ) {
    return this.cardService.remove(workspaceId, boardId, listId, id);
  }
}
