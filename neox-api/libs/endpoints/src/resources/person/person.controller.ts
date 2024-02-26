import { Serialize } from '@neox-api/shared/common';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../base';
import { CreatePersonDto, PersonVm, UpdatePersonDto } from './models';
import { IPerson } from './person.entity';
import { PersonService } from './person.service';

@Controller('persons')
@Serialize(PersonVm)
@ApiTags('Person')
@ApiBearerAuth()
export class PersonController extends BaseController<
  IPerson,
  PersonVm,
  CreatePersonDto,
  UpdatePersonDto
> {
  constructor(private readonly personService: PersonService) {
    super(personService, PersonVm, CreatePersonDto, UpdatePersonDto);
  }
}
