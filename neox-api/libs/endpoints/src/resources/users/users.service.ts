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
import { passwordHandler } from '../auth/helpers';
import { Person } from '../person';
import { CreateUserDto, UpdateUserDto } from './models';
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

  override async create<IUserOmitHash>(
    createUserDto: AuthDto,
  ): Promise<IUserOmitHash> {
    const decryptedPassword = passwordHandler(createUserDto.password);
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.hash = hashIt(decryptedPassword);
    newUser.person = new Person();
    try {
      const storedUser: User = await this.usersRepository.save(newUser);
      const { hash, hashedRt, ...userWithoutPassword } = storedUser;
      return userWithoutPassword as IUserOmitHash;
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
