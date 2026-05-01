import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './schema/board.schemas';
import { BoardMembersModule } from '../board-members/board-members.module';
import { WorkspacesModule } from '../workspaces/workspaces.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    BoardMembersModule,
    WorkspacesModule,
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
