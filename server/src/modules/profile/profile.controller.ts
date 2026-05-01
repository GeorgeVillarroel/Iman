import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { PayloadUser } from 'src/common/decorators/user.decorator';

@Controller('users/profile')
export class ProfileController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  findUserByPayload(
    @PayloadUser('userId') userId: string,
    @PayloadUser('email') email: string,
  ): {
    userId: string;
    email: string;
  } {
    return { userId, email };
  }
}
