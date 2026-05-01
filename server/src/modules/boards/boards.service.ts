import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBoardDTO } from './dto/update-board.dto';
import { CreateBoardDTO } from './dto/create-board.dto';
import { Board } from './schema/board.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardMembersService } from '../board-members/board-members.service';
import { ERole } from 'src/common/interfaces/shared.interfaces';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<Board>,
    private boardMembersService: BoardMembersService,
  ) {}
  async create(
    uId: string,
    wId: string,
    createboardDto: CreateBoardDTO,
  ): Promise<Board> {
    const board = new this.boardModel({
      ...createboardDto,
      workspaceId: wId,
      //ownerId: userId,
      //members: [{ userId: userId, role: 'OWNER', joinedAt: new Date() }],
    });

    await this.boardMembersService.linkBoardToUser(board._id, uId, ERole.OWNER);
    return await board.save();
  }

  async findAll(id: string): Promise<Board[]> {
    const board = await this.boardModel.find({ workspaceId: id });
    if (!board[0]) {
      throw new NotFoundException('No boards found for this workspace');
    }
    return board;
  }

  async findOne(wId: string, id: string): Promise<Board> {
    const board = await this.boardModel.findOne({ _id: id, workspaceId: wId });
    if (!board) {
      console.log(board);
      throw new NotFoundException('not found');
    }
    return board;
  }

  async update(
    wId: string,
    id: string,
    updateBoardDTO: UpdateBoardDTO,
  ): Promise<Board> {
    const board = await this.boardModel.findOneAndUpdate(
      { _id: id, workspaceId: wId },
      updateBoardDTO,
      {
        returnDocument: 'after',
      },
    );
    if (!board) {
      throw new NotFoundException('not found');
    }
    return board;
  }

  async remove(wId: string, id: string): Promise<Board> {
    const board = await this.boardModel.findOneAndDelete({
      _id: id,
      workspaceId: wId,
    });
    if (!board) {
      throw new NotFoundException('not found');
    }
    return board;
  }
}
