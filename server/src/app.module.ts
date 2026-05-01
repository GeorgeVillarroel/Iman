import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';
import { BoardsModule } from './modules/boards/boards.module';
import { ListsModule } from './modules/lists/lists.module';
import { CardsModule } from './modules/cards/cards.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { validate } from 'env.validation';
import { join } from 'path';
import { SessionsModule } from './modules/sessions/sessions.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SettingsModule } from './modules/settings/settings.module';
import { BoardMembersModule } from './modules/board-members/board-members.module';
@Module({
  imports: [
    UsersModule,
    AuthModule,
    WorkspacesModule,
    BoardsModule,
    ListsModule,
    ConfigModule.forRoot({
      envFilePath: [
        join(process.cwd(), `.env.${process.env.NODE_ENV || 'development'}`),
      ],
      load: [configuration],
      isGlobal: true,
      validate: validate,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('database.uri'),
        autoIndex: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      }),
    }),
    CardsModule,
    ProfileModule,
    SettingsModule,
    SessionsModule,
    BoardMembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('auth');
  }
}
