import { Serialize } from '@neox-api/shared/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../base';
import { CreateUserDto, UpdateUserDto, UserDto } from './dto';
import { IUser } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
@Serialize(UserDto)
@ApiTags('Users')
@ApiBearerAuth()
export class UsersController extends BaseController<
  IUser,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly usersService: UsersService) {
    super(usersService, CreateUserDto, UpdateUserDto);
  }

  @Post()
  override create<IUserOmitPassword>(
    @Body() authCredentialsDto: CreateUserDto,
  ): Promise<IUserOmitPassword> {
    return this.usersService.create(authCredentialsDto);
  }
}
