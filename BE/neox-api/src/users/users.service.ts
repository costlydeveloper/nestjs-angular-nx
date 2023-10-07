import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../dependencies/shared-types';
import { encodePassword } from '../library/utils/bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser, User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<IUser>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
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
    return this.usersRepository.findOneBy({ username: username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
