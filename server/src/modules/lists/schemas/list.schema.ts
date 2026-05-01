import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ListDocument = List & Document;

@Schema({ timestamps: true })
export class List<T = string> {
  _id: T;

  @Prop({ type: String, ref: 'Workspace', required: true, index: true })
  workspaceId: T;

  @Prop({ type: String, ref: 'Board', required: true, index: true })
  boardId: T;

  @Prop({ required: true })
  name: string;

  @Prop({ type: String, default: '#FFFFFF' })
  cover: string;

  @Prop({ required: true, index: true, default: 'a' })
  order: string;
}

export const ListSchema = SchemaFactory.createForClass(List);
