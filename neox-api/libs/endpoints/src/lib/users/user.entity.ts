import { BaseEntity, IBaseEntity } from '@neox-api/shared/common';
import { Nullable } from '@neox-api/shared/utils';
import { Column, Entity } from 'typeorm';

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
  password: string | undefined;

  @Column()
  username: string | undefined;

  @Column({ default: true })
  isActive: boolean | undefined;
}
