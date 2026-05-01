import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CardDocument = Card & Document;

@Schema({ timestamps: true })
export class Card<T = string> {
  _id: T;

  @Prop({ required: true })
  name: string;

  @Prop({ default: '#CCCCCC' })
  cover: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ type: String, ref: 'Workspace', required: true, index: true })
  workspaceId: T;

  @Prop({ type: String, ref: 'Board', required: true, index: true })
  boardId: T;

  @Prop({ type: String, ref: 'List', required: true, index: true })
  listId: T;

  @Prop({ required: true, index: true, default: 'a' })
  order: string;

  @Prop({ type: String, ref: 'Card', nullable: true, default: '', index: true })
  parentId: T | null;

  @Prop({ default: false })
  isCompleted: boolean;
}

export const CardSchema = SchemaFactory.createForClass(Card);
