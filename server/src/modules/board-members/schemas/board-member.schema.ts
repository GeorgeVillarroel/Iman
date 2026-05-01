import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ERole } from 'src/common/interfaces/shared.interfaces';

export type BoardMemberDocument = BoardMember & Document;

@Schema({ timestamps: true })
export class BoardMember<T = string, U = T> {
  _id: T;

  @Prop({ type: String, ref: 'Board', required: true, index: true })
  boardId: T;

  @Prop({ type: String, ref: 'User', required: true, index: true })
  userId: U;

  @Prop({ enum: ERole, default: ERole.GUEST })
  role: ERole;
}

export const BoardMemberSchema = SchemaFactory.createForClass(BoardMember);
BoardMemberSchema.index({ boardId: 1, userId: 1 }, { unique: true });
