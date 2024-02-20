import { Nullable } from '@neox-api/shared/common';
import { Expose } from 'class-transformer';
import { BaseDto } from '../../../base';
import { IPerson } from '../../person';

export class PersonDto extends BaseDto implements Partial<IPerson> {
  @Expose()
  firstName!: Nullable<string>;
  @Expose()
  lastName!: Nullable<string>;
}
