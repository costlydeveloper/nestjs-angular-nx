import {
  BaseEntityService,
  DbErrorHandler,
  MESSAGE,
  Nullable,
} from '@neox-api/shared/common';
import { hashIt } from '@neox-api/shared/utils';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { AuthDto } from '../auth/dto';
import { IUser, IUserOmitPassword, User } from './user.entity';
import { UsersRepository } from './users-repository.service';

@Injectable()
export class UsersService extends BaseEntityService<IUser> {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly dbErrHandler: DbErrorHandler,
  ) {
    super(usersRepository);
  }

  async create(createUserDto: AuthDto): Promise<IUserOmitPassword> {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.hash = hashIt(createUserDto.password);

    try {
      const storedUser: User = await this.usersRepository.save(newUser);
      const { hash, ...userWithoutPassword } = storedUser;
      return userWithoutPassword;
    } catch (error: any) {
      if (error.code === this.dbErrHandler.codes.UNIQUE_VIOLATION) {
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

  findOneBy(partialUser: Partial<IUser>): Promise<Nullable<IUser>> {
    return this.usersRepository.findOneBy(partialUser as object);
  }
}
