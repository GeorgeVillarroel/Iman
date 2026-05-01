import { Controller, Param, Delete, UseGuards, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UsersService } from '../users/users.service';
import { PayloadUser } from 'src/common/decorators/user.decorator';

@Controller('users/settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly usersService: UsersService,
  ) {}

  @Post('enable2FA')
  @UseGuards(JwtAuthGuard)
  async enable2fa(@PayloadUser('userId') userId: string) {
    return await this.settingsService.enable2FA(userId);
  }

  @Delete('disable2FA')
  @UseGuards(JwtAuthGuard)
  async disable2fa(@PayloadUser('userId') userId: string) {
    return await this.settingsService.disable2FA(userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
