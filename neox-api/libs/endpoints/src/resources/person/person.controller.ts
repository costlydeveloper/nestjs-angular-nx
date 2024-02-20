import { Serialize } from '@neox-api/shared/common';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../base';
import { CreatePersonDto, PersonDto, UpdatePersonDto } from './dto';
import { IPerson } from './person.entity';
import { PersonService } from './person.service';

@Controller('persons')
@Serialize(PersonDto)
@ApiTags('Person')
@ApiBearerAuth()
export class PersonController extends BaseController<
  IPerson,
  CreatePersonDto,
  UpdatePersonDto
> {
  constructor(private readonly personService: PersonService) {
    super(personService, CreatePersonDto, UpdatePersonDto);
  }
}
