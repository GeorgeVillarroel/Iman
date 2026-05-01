import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserHydratedDocument = HydratedDocument<User>;

export enum EStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  RESET = 'reset',
}

class Code {
  @Prop({ type: 'string', default: '000000' })
  code: string;

  @Prop({ type: 'number', default: 0 })
  attempts: number;

  @Prop({ type: Date, default: new Date() })
  codeTime: Date;

  @Prop({ type: 'boolean', default: true })
  expired: boolean;
}

@ApiSchema({ name: 'User' })
@Schema({ timestamps: true })
export class User {
  //USER-GENERATED
  @ApiProperty({ type: 'string', required: true, uniqueItems: true })
  @Prop({ type: 'string', required: true, unique: true, index: true })
  username: string;

  @ApiProperty({ type: 'string', required: true, uniqueItems: true })
  @Prop({ type: 'string', required: true, unique: true, index: true })
  email: string;

  @ApiProperty({ type: 'string', required: true })
  @Prop({ type: 'string', required: true, select: false })
  password: string;

  //USER-UPDATED
  @ApiProperty({ type: 'string' })
  @Prop({ type: 'string', default: '' })
  name: string;

  @ApiProperty({ type: 'string' })
  @Prop({ default: 'default.png' })
  profilePic: string;

  @ApiProperty({ type: 'string' })
  @Prop({ type: 'string', default: '' })
  company: string;

  @ApiProperty({ type: 'boolean' })
  @Prop({ type: 'string', default: false })
  isPrivate: boolean;

  //SERVER-GENERATED
  @ApiProperty({ type: 'string', enum: EStatus, default: EStatus.INACTIVE })
  @Prop({
    type: 'string',
    enum: Object.values(EStatus),
    default: EStatus.INACTIVE,
  })
  userStatus: EStatus;

  @Prop({ type: Code })
  verificationCode: Code;

  @Prop({ type: Code })
  resetCode: Code;
  // [children] -> sessions: string;

  @ApiProperty({ type: 'string' })
  @Prop({ select: false, default: '' })
  twoFASecret: string;

  @ApiProperty({ type: 'boolean' })
  @Prop({ default: false })
  twoFAEnabled: boolean;

  @ApiProperty({ type: 'string' })
  @Prop({ select: false, default: '' })
  apiKey: string;

  @ApiProperty({ type: 'string', description: 'unique id' })
  _id: string;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    const { _id, __v, ...result } = ret;
    return result;
  },
});
export { UserSchema };
