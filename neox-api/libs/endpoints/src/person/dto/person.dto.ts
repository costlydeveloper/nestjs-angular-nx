import { Nullable } from '@neox-api/shared/common';
import { Expose } from 'class-transformer';
import { IPerson } from '../../person';

export class PersonDto implements Partial<IPerson> {
  @Expose()
  id!: string;
  @Expose()
  firstName!: Nullable<string>;
  @Expose()
  lastName!: Nullable<string>;
}
