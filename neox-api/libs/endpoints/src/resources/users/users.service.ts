import { DB_ERROR_CODE, MESSAGE, Nullable } from '@neox-api/shared/common';
import { hashIt } from '@neox-api/shared/utils';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { BaseEntityService } from '../../base';
import { AuthDto } from '../auth/dto';
import { Person } from '../person';

import { CreateUserDto, UpdateUserDto } from './dto';
import { IUser, User } from './user.entity';
import { UsersRepository } from './users-repository.service';

@Injectable()
export class UsersService extends BaseEntityService<
  IUser,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly usersRepository: UsersRepository) {
    super(usersRepository);
  }

  override async create<IUserOmitPassword>(
    createUserDto: AuthDto,
  ): Promise<IUserOmitPassword> {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.hash = hashIt(createUserDto.password);
    newUser.person = new Person();

    try {
      const storedUser: User = await this.usersRepository.save(newUser);
      const { hash, ...userWithoutPassword } = storedUser;
      return userWithoutPassword as IUserOmitPassword;
    } catch (error: any) {
      if (error.code === DB_ERROR_CODE.UNIQUE_VIOLATION) {
        throw new ConflictException(MESSAGE.ERROR.USERNAME_EXIST);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async updateRt(
    userId: string,
    hashedRt: Nullable<string>,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(userId, { hashedRt });
  }
}
