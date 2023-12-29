import { BaseController } from '@neox-api/shared/common';
import { Serialize } from '@neox-api/shared/utils';

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { CreateUserDto, UserDto } from './dto';
import { IUser, IUserOmitPassword } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
export class UsersController extends BaseController<IUser> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

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
  create(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<IUserOmitPassword> {
    return this.usersService.create(authCredentialsDto);
  }

  @Get()
  findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  /*  @Get(':username')
		@ApiBearerAuth() // swagger
		findOne(@Param('username') username: string): Promise<Nullable<IUser>> {
		  return this.usersService.findByUsername(username);
		}*/
}
