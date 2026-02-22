import { SetMetadata } from '@nestjs/common';
import { ERole } from '../interfaces/shared.interfaces';

export const WORKSPACE_ROLES_KEY = 'workspaceRole';
export const WorkspaceRoles = (...roles: [ERole, ...ERole[]]) =>
  SetMetadata(WORKSPACE_ROLES_KEY, roles);
