import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ERole } from '../interfaces/shared.interfaces';
import { WORKSPACE_ROLES_KEY } from '../decorators/space-role.decorator';
import { InjectModel } from '@nestjs/mongoose';
import {
  Workspace,
  WorkspaceDocument,
} from 'src/modules/workspaces/schemas/workspace.schema';
import { Model } from 'mongoose';
import { PayloadType } from 'src/modules/auth/types/types';
import { BOARD_ROLES_KEY } from '../decorators/board-role.decorator';
import {
  BoardMember,
  BoardMemberDocument,
} from 'src/modules/board-members/schemas/board-member.schema';

@Injectable()
export class WorkspaceRolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectModel(Workspace.name)
    private workspaceModel: Model<WorkspaceDocument>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(
      WORKSPACE_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<{
      user: PayloadType;
      params: { id?: string; w?: string };
      method: string;
    }>();
    const user: PayloadType = request.user;
    if (!user) {
      throw new ForbiddenException('User not auth');
    }

    const wId = request.params.w || request.params.id;
    const workspace = await this.workspaceModel
      .findOne(
        {
          _id: wId,
          'members.userId': String(user.userId),
        },
        { 'members.$': 1 },
      )
      .lean();
    if (!workspace) {
      throw new ForbiddenException('Not part of the workspace');
    }

    const userRole = workspace.members[0].role;
    const userHasPermissions = requiredRoles.includes(userRole);
    if (userHasPermissions) {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable()
export class BoardRolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectModel(BoardMember.name)
    private boardMemberModel: Model<BoardMemberDocument>,
    @InjectModel(Workspace.name)
    private workspaceModel: Model<WorkspaceDocument>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(
      BOARD_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{
      user: PayloadType;
      params: { id?: string; b?: string; w: string };
      route: { Route: { path: string } };
      method: string;
    }>();
    const user: PayloadType = request.user;
    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const bId = request.params.b || request.params.id;
    const board = await this.boardMemberModel
      .findOne({
        boardId: bId,
        userId: user.userId,
      })
      .lean();
    if (board) {
      const userRole = board.role;
      const userHasPermissions = requiredRoles.includes(userRole);
      if (userHasPermissions) {
        return true;
      }
    }

    const wId = request.params.w || request.params.id;
    const workspace = await this.workspaceModel
      .findOne(
        {
          _id: wId,
          'members.userId': user.userId,
        },
        { 'members.$': 1 },
      )
      .lean();
    if (!workspace) {
      throw new ForbiddenException(
        'User does not have permissions on the workspace or board',
      );
    }
    const userWorkspaceRole = workspace.members[0].role;
    if (userWorkspaceRole == ERole.OWNER || userWorkspaceRole == ERole.ADMIN) {
      return true;
    }

    if (requiredRoles.includes(userWorkspaceRole)) {
      return true;
    }

    throw new ForbiddenException(
      'User does not have permissions on the workspace or board',
    );
  }
}
