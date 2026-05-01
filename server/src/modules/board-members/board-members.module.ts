import { Module } from '@nestjs/common';
import { BoardMembersService } from './board-members.service';
import { BoardMembersController } from './board-members.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardMember, BoardMemberSchema } from './schemas/board-member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BoardMember.name, schema: BoardMemberSchema },
    ]),
  ],
  controllers: [BoardMembersController],
  providers: [BoardMembersService],
  exports: [BoardMembersService, MongooseModule],
})
export class BoardMembersModule {}
