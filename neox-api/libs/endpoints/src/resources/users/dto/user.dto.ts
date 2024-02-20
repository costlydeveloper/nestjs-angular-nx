import { Expose, Type } from 'class-transformer';
import { BaseDto } from '../../../base';
import { PersonDto } from '../../person';
import { IUser } from '../user.entity';

export class UserDto extends BaseDto implements Partial<IUser> {
  @Expose()
  email!: string;
  @Type(() => PersonDto)
  @Expose()
  person!: PersonDto;
}
