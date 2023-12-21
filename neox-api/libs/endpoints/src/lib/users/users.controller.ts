import { Nullable, Serialize } from '@neox-api/shared/utils';

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { CreateUserDto, UserDto } from './dtos';
import { IUser, User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({
    type: CreateUserDto,
    description: 'Json structure for user object',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.usersService.create(authCredentialsDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':username')
  @ApiBearerAuth() // swagger
  findOne(@Param('username') username: string): Promise<Nullable<IUser>> {
    return this.usersService.findOne(username);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
