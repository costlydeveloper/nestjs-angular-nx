import { Nullable } from '@neox-api/shared/common';
import { Expose } from 'class-transformer';
import { BaseViewModel } from '../../../base';
import { IPerson, PersonSchemaType } from '../../person';

export class PersonVm
  extends BaseViewModel
  implements Partial<IPerson>, PersonSchemaType
{
  @Expose()
  firstName!: Nullable<string>;
  @Expose()
  lastName!: Nullable<string>;
}
