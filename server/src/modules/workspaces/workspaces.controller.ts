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
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDTO } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { PayloadUser } from 'src/common/decorators/user.decorator';
import { WorkspaceRoles } from 'src/common/decorators/space-role.decorator';
import { ERole } from 'src/common/interfaces/shared.interfaces';
import { WorkspaceRolesGuard } from 'src/common/guards/roles.guard';

@Controller('workspaces')
@UseGuards(JwtAuthGuard, WorkspaceRolesGuard)
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post()
  create(
    @PayloadUser('userId') userId: string,
    @Body() createWorkspaceDTO: CreateWorkspaceDTO,
  ) {
    return this.workspacesService.create(userId, createWorkspaceDTO);
  }

  @Get()
  findAll() {
    return this.workspacesService.findAll();
  }

  @Get(':id')
  @WorkspaceRoles(ERole.OWNER, ERole.ADMIN, ERole.MEMBER, ERole.GUEST)
  findOne(@Param('id') id: string) {
    return this.workspacesService.findOne(id);
  }

  @Patch(':id')
  @WorkspaceRoles(ERole.OWNER, ERole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateWorkspaceDto,
  ) {
    return this.workspacesService.update(id, updateWorkspaceDto);
  }

  @Delete(':id')
  @WorkspaceRoles(ERole.OWNER)
  remove(@Param('id') id: string) {
    return this.workspacesService.remove(id);
  }
}
