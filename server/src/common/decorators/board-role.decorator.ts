import { SetMetadata } from '@nestjs/common';
import { ERole } from '../interfaces/shared.interfaces';

export const BOARD_ROLES_KEY = 'boardRole';
export const BoardRoles = (...roles: [ERole, ...ERole[]]) =>
  SetMetadata(BOARD_ROLES_KEY, roles);
