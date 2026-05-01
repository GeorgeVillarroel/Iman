import { PartialType } from '@nestjs/swagger';
import { CreateWorkspaceDTO } from './create-workspace.dto';

export class UpdateWorkspaceDto extends PartialType(CreateWorkspaceDTO) {}
