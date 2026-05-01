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
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDTO } from './dto/update-board.dto';
import { PayloadUser } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import {
  BoardRolesGuard,
  WorkspaceRolesGuard,
} from 'src/common/guards/roles.guard';
import { ERole } from 'src/common/interfaces/shared.interfaces';
import { WorkspaceRoles } from 'src/common/decorators/space-role.decorator';
import { BoardRoles } from 'src/common/decorators/board-role.decorator';

@Controller('w/:w/boards')
@UseGuards(JwtAuthGuard, WorkspaceRolesGuard, BoardRolesGuard)
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  @WorkspaceRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER)
  create(
    @Param('w') workspaceId: string,
    @PayloadUser('userId') userId: string,
    @Body() createBoardDTO: CreateBoardDTO,
  ) {
    return this.boardService.create(userId, workspaceId, createBoardDTO);
  }

  @Get()
  @WorkspaceRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER)
  findAll(@Param('w') workspaceId: string) {
    return this.boardService.findAll(workspaceId);
  }

  @Get(':id')
  @BoardRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER, ERole.GUEST)
  findOne(@Param('w') workspaceId: string, @Param('id') id: string) {
    return this.boardService.findOne(workspaceId, id);
  }

  @Patch(':id')
  @BoardRoles(ERole.OWNER, ERole.ADMIN)
  update(
    @Param('w') workspaceId: string,
    @Param('id') id: string,
    @Body() updateBoardDTO: UpdateBoardDTO,
  ) {
    return this.boardService.update(workspaceId, id, updateBoardDTO);
  }

  @Delete(':id')
  @BoardRoles(ERole.OWNER)
  remove(@Param('w') workspaceId: string, @Param('id') id: string) {
    return this.boardService.remove(workspaceId, id);
  }
}
