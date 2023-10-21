import { Column, Entity } from 'typeorm';
import { BaseEntity, IBaseEntity } from '../dependencies/base.entity';
import { Nullable } from '../dependencies/shared-types';

export interface IUser extends IBaseEntity {
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  password: string;
  username: string;
  isActive: boolean;
}

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: true })
  firstName: Nullable<string> = null;

  @Column({ type: 'varchar', nullable: true })
  lastName: Nullable<string> = null;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ default: true })
  isActive: boolean;
}
