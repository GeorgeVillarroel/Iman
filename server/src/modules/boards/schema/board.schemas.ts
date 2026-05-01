import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EVisibility } from 'src/common/interfaces/shared.interfaces';

export type BoardDocument = Board & Document;

@Schema({ timestamps: true })
export class Board<T = string> {
  _id: T;

  @Prop({ type: String, ref: 'Workspace', required: true, index: true })
  workspaceId: T;

  @Prop({ required: true })
  name: string;

  @Prop({ default: '#ffffff' })
  cover: string;

  @Prop({ enum: EVisibility, default: EVisibility.WORKSPACE })
  visibility: EVisibility;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
