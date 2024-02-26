import { Expose } from 'class-transformer';

export abstract class BaseViewModel {
  @Expose()
  id!: string;
}
