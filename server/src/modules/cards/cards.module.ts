import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './schemas/card.schema';
import { WorkspacesModule } from '../workspaces/workspaces.module';
import { BoardMembersModule } from '../board-members/board-members.module';

@Module({
  imports: [
    AuthModule,
    WorkspacesModule,
    BoardMembersModule,
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
