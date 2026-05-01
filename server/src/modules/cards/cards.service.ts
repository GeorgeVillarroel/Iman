import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schemas/card.schema';
import { Model } from 'mongoose';
import { CreateCardDTO } from './dto/create-card.dto';
import { UpdateCardDTO } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}
  async create(
    userId: string,
    wId: string,
    bId: string,
    lId: string,
    createCardDTO: CreateCardDTO,
  ): Promise<Card> {
    if (createCardDTO.parentId == '') {
      const card = new this.cardModel({
        ...createCardDTO,
        workspaceId: wId,
        boardId: bId,
        listId: lId,
        parentId: null,
        //ownerId: userId,
        //members: [{ userId: userId, role: 'OWNER', joinedAt: new Date() }],
      });
      return await card.save();
    } else {
      const card = new this.cardModel({
        ...createCardDTO,
        workspaceId: wId,
        boardId: bId,
        listId: lId,
        //ownerId: userId,
        //members: [{ userId: userId, role: 'OWNER', joinedAt: new Date() }],
      });
      return await card.save();
    }
  }

  async findAll(wId: string, bId: string, lId: string): Promise<Card[]> {
    const card = await this.cardModel.find({
      workspaceId: wId,
      boardId: bId,
      listId: lId,
    });
    if (!card[0]) {
      throw new NotFoundException('No cards found for this workspace');
    }
    return card;
  }

  async findOne(
    wId: string,
    bId: string,
    lId: string,
    id: string,
  ): Promise<Card> {
    const card = await this.cardModel.findOne({
      _id: id,
      workspaceId: wId,
      boardId: bId,
      listId: lId,
    });
    if (!card) {
      console.log(card);
      throw new NotFoundException('not found');
    }
    return card;
  }

  async update(
    wId: string,
    bId: string,
    lId: string,
    id: string,
    updateCardDTO: UpdateCardDTO,
  ): Promise<Card> {
    const card = await this.cardModel.findOneAndUpdate(
      { _id: id, workspaceId: wId, boardId: bId, listId: lId },
      updateCardDTO,
      {
        returnDocument: 'after',
      },
    );
    if (!card) {
      throw new NotFoundException('not found');
    }
    return card;
  }

  async remove(
    wId: string,
    bId: string,
    lId: string,
    id: string,
  ): Promise<Card> {
    const card = await this.cardModel.findOneAndDelete({
      _id: id,
      workspaceId: wId,
      boardId: bId,
      listId: lId,
    });
    if (!card) {
      throw new NotFoundException('not found');
    }
    return card;
  }
}
