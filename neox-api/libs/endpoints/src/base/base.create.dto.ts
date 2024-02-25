import { Exclude } from 'class-transformer';

export abstract class BaseCreateDto {
  @Exclude()
  id?: string;

  @Exclude()
  createdDate?: Date;

  @Exclude()
  updatedDate?: Date;
}
