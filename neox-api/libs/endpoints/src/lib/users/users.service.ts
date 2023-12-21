import { encodePassword, Nullable } from '@neox-api/shared/utils';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { IUser, User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<IUser>,
  ) {}

  create(createUserDto: AuthCredentialsDto): Promise<User> {
    const password = encodePassword(createUserDto.password);
    const newUser = new User();
    newUser.username = createUserDto.username;
    newUser.password = password;

    return this.usersRepository.save(newUser);
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