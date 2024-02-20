import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../base';
import { Person } from './person.entity';

@Injectable()
export class PersonRepository extends BaseRepository<Person> {
  constructor(
    @InjectRepository(Person)
    repo: Repository<Person>,
  ) {
    super(repo);
  }

  async findAll(): Promise<Person[]> {
    return this.find();
  }
}
