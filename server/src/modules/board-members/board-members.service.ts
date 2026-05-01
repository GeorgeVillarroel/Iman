import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BoardMember } from './schemas/board-member.schema';
import { Model } from 'mongoose';
import { ERole } from 'src/common/interfaces/shared.interfaces';

@Injectable()
export class BoardMembersService {
  constructor(
    @InjectModel(BoardMember.name) private boardModel: Model<BoardMember>,
  ) {}

  async linkBoardToUser(bId: string, uId: string, userRole: ERole) {
    const boardMemberEntry = new this.boardModel({
      boardId: bId,
      userId: uId,
      role: userRole,
    });
    return await boardMemberEntry.save();
  }
}
