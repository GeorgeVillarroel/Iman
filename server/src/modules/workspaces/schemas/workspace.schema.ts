import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ERole, EVisibility } from 'src/common/interfaces/shared.interfaces';

export type WorkspaceDocument = Workspace & Document;

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Workspace<T = string, U = T> {
  _id: T;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: String, ref: 'User', required: true })
  ownerId: U;

  @Prop({ required: true, enum: EVisibility, default: EVisibility.PRIVATE })
  visibility: EVisibility;

  @Prop({
    type: [
      {
        userId: { type: String, ref: 'User' },
        role: { type: String, enum: ERole },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    _id: false,
    select: false, // Performance: Don't load 5000 members unless explicitly asked
  })
  members: { userId: U; role: ERole; joinedAt: Date }[];
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);

// Virtual to see all boards in this workspace without storing an array of IDs
WorkspaceSchema.virtual('boards', {
  ref: 'Board',
  localField: '_id',
  foreignField: 'workspaceId',
});
