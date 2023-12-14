import { Nullable, Public, Serialize } from '@neox-api/shared/utils';

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dtos';
import { IUser, User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string): Promise<Nullable<IUser>> {
    return this.usersService.findOne(username);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
