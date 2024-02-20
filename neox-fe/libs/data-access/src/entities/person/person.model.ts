import { Nullable } from '@team-link/common';
import { BaseModel } from '../../base';
import { PersonType } from './person.schema';

export class Person extends BaseModel implements PersonType {
  firstName: Nullable<string> = null;
  lastName: Nullable<string> = null;
}
