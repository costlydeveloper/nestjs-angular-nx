import { Expose, Type } from 'class-transformer';
import { PersonDto } from '../../person';
import { IUser } from '../user.entity';

export class UserDto implements Partial<IUser> {
  @Expose()
  id!: string;
  @Expose()
  email!: string;
  @Type(() => PersonDto)
  @Expose()
  person!: PersonDto;
}
