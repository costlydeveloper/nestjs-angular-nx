import { Expose, Type } from 'class-transformer';
import { BaseViewModel } from '../../../base';
import { PersonVm } from '../../person';
import { IUser } from '../user.entity';
import { UserVmSchemaType } from './user.vm.schema';

export class UserVm
  extends BaseViewModel
  implements Partial<IUser>, UserVmSchemaType
{
  @Expose()
  email!: string;
  @Type(() => PersonVm)
  @Expose()
  person!: PersonVm;
}
