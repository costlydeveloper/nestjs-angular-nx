import { DbErrorHandler, MESSAGE } from '@neox-api/shared/common';
import { encodePassword, Nullable } from '@neox-api/shared/utils';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { IUser, IUserOmitPassword, User } from './user.entity';
import { UsersRepository } from './users-repository.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UsersRepository,
    private readonly dbErrHandler: DbErrorHandler,
  ) {}

  async create(createUserDto: AuthCredentialsDto): Promise<IUserOmitPassword> {
    const newUser = new User();
    newUser.username = createUserDto.username;
    newUser.password = encodePassword(createUserDto.password);

    try {
      const storedUser: User = await this.usersRepository.save(newUser);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = storedUser;
      return userWithoutPassword;
    } catch (error: any) {
      if (error.code === this.dbErrHandler.codes.UNIQUE_VIOLATION) {
        throw new ConflictException(MESSAGE.ERROR.USERNAME_EXIST);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<Nullable<IUser>> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
