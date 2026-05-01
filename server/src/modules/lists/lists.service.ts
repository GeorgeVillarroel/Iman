import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateListDTO } from './dto/create-list.dto';
import { UpdateListDTO } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from './schemas/list.schema';

@Injectable()
export class ListsService {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}
  async create(
    userId: string,
    wId: string,
    bId: string,
    createListDTO: CreateListDTO,
  ): Promise<List> {
    const list = new this.listModel({
      ...createListDTO,
      workspaceId: wId,
      boardId: bId,
      //ownerId: userId,
      //members: [{ userId: userId, role: 'OWNER', joinedAt: new Date() }],
    });

    return await list.save();
  }

  async findAll(wId: string, bId: string): Promise<List[]> {
    const list = await this.listModel.find({ workspaceId: wId, boardId: bId });
    if (!list[0]) {
      throw new NotFoundException('No lists found for this workspace');
    }
    return list;
  }

  async findOne(wId: string, bId: string, id: string): Promise<List> {
    const list = await this.listModel.findOne({
      _id: id,
      workspaceId: wId,
      boardId: bId,
    });
    if (!list) {
      console.log(list);
      throw new NotFoundException('not found');
    }
    return list;
  }

  async update(
    wId: string,
    bId: string,
    id: string,
    updateListDTO: UpdateListDTO,
  ): Promise<List> {
    const list = await this.listModel.findOneAndUpdate(
      { _id: id, workspaceId: wId, boardId: bId },
      updateListDTO,
      {
        returnDocument: 'after',
      },
    );
    if (!list) {
      throw new NotFoundException('not found');
    }
    return list;
  }

  async remove(wId: string, bId: string, id: string): Promise<List> {
    const list = await this.listModel.findOneAndDelete({
      _id: id,
      boardId: bId,
      workspaceId: wId,
    });
    if (!list) {
      throw new NotFoundException('not found');
    }
    return list;
  }
}
