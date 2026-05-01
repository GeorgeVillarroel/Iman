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
import { ListsService } from './lists.service';
import { CreateListDTO } from './dto/create-list.dto';
import { UpdateListDTO } from './dto/update-list.dto';
import { PayloadUser } from 'src/common/decorators/user.decorator';
import {
  BoardRolesGuard,
  WorkspaceRolesGuard,
} from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { BoardRoles } from 'src/common/decorators/board-role.decorator';
import { ERole } from 'src/common/interfaces/shared.interfaces';

@Controller('w/:w/b/:b/lists')
@UseGuards(JwtAuthGuard, WorkspaceRolesGuard, BoardRolesGuard)
@BoardRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER, ERole.GUEST)
export class ListsController {
  constructor(private readonly listService: ListsService) {}

  @Post()
  create(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @PayloadUser('userId') userId: string,
    @Body() createListDTO: CreateListDTO,
  ) {
    return this.listService.create(userId, workspaceId, boardId, createListDTO);
  }

  @Get()
  findAll(@Param('w') workspaceId: string, @Param('b') boardId: string) {
    return this.listService.findAll(workspaceId, boardId);
  }

  @Get(':id')
  findOne(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('id') id: string,
  ) {
    return this.listService.findOne(workspaceId, boardId, id);
  }

  @Patch(':id')
  update(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('id') id: string,
    @Body() updateListDTO: UpdateListDTO,
  ) {
    return this.listService.update(workspaceId, boardId, id, updateListDTO);
  }

  @Delete(':id')
  remove(
    @Param('w') workspaceId: string,
    @Param('b') boardId: string,
    @Param('id') id: string,
  ) {
    return this.listService.remove(workspaceId, boardId, id);
  }
}
