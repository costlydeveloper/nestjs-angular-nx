import { Nullable } from '@team-link/common';
import { BaseModel, IBaseModel } from '../../base';
import { PersonApiService } from './person.api.service';
import { PersonSchemaType } from './person.schema';

export type PersonType = PersonSchemaType & IBaseModel<PersonSchemaType>;
export class Person extends BaseModel<PersonType> implements PersonType {
  firstName: Nullable<string> = null;
  lastName: Nullable<string> = null;

  constructor() {
    super();
    this.setApiService(PersonApiService);
  }
}
