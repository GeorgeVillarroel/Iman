import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSchema, List } from './schemas/list.schema';
import { BoardMembersModule } from '../board-members/board-members.module';
import { WorkspacesModule } from '../workspaces/workspaces.module';

@Module({
  imports: [
    AuthModule,
    WorkspacesModule,
    BoardMembersModule,
    MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
