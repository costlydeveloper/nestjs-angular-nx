import { BaseEntity, IBaseEntity, Nullable } from '@neox-api/shared/common';
import { Column, Entity } from 'typeorm';

export interface IPerson extends IBaseEntity {
  firstName: Nullable<string>;
  lastName: Nullable<string>;
}
@Entity()
export class Person extends BaseEntity implements IPerson {
  @Column({ nullable: true })
  firstName: string | null = null;
  @Column({ nullable: true })
  lastName: string | null = null;
}
