import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '../../base';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { PersonRepository } from './person-repository.service';
import { IPerson } from './person.entity';

@Injectable()
export class PersonService extends BaseEntityService<
  IPerson,
  CreatePersonDto,
  UpdatePersonDto
> {
  constructor(private readonly personRepository: PersonRepository) {
    super(personRepository);
  }
}
