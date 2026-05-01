import {
  Controller,
  /*   Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put, */
} from '@nestjs/common';
import { UsersService } from './users.service'; /* 
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResetPasswordDTO } from './dto/edit-password.dto';
import { ApiUsers } from './docs/users.docs';
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // API-AUTH-001
  /*   @ApiUsers.Create()
  @Post('auth')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  } */

  // API-PROFILE-001
  /*   @Get('profile/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
 */
  // API-PROFILE-002
  /*   @Get('profile')
  findAll() {
    return this.usersService.findAll();
  } */

  // API-PROFILE-004
  /*   @Put('profile/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  } */

  // API-SETTINGS-001
  /*   @Patch('settings/:id')
  update(@Param('id') id: string, @Body() resetPasswordDTO: ResetPasswordDTO) {
    return this.usersService.updatePw(id, resetPasswordDTO);
  }
 */
  // API-SETTINGS-004
  /*   @Delete('settings/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  } */
}
