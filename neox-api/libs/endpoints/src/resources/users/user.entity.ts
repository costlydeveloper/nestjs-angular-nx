import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity, IBaseEntity } from '../../base';
import { Person, PersonVm } from '../person';

export interface IUser extends IBaseEntity {
  hash: string;
  hashedRt: string | null;
  email: string;
  isActive: boolean;
  person: PersonVm;
}

export type IUserOmitHash = Omit<IUser, 'hash' | 'hashedRt'>;

export interface IWhoAmI {
  id: string;
  email: string;
}

@Entity()
export class User extends BaseEntity implements IUser {
  @Column()
  hash!: string;

  @Column({ nullable: true })
  hashedRt: string | null = null;

  @Column({ unique: true })
  email!: string;

  @Column({ default: true })
  isActive!: boolean;

  @OneToOne(() => Person, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  person!: Person;
}
