import { BaseRepository } from '@neox-api/shared/common';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IUser, User } from './user.entity';

@Injectable()
export class UsersRepository extends BaseRepository<IUser> {
  constructor(dataSource: DataSource) {
    super(User, dataSource);
  }
}
