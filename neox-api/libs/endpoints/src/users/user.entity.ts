import { BaseEntity, IBaseEntity } from '@neox-api/shared/common';
import { Column, Entity, OneToMany } from 'typeorm';
import { Task } from '../tasks';

export interface IUser extends IBaseEntity {
  hash: string;
  hashedRt: string | null;
  email: string;
  isActive: boolean;
}

export type IUserOmitPassword = Omit<IUser, 'hash'>;

export interface IUserIdentifier {
  id: string;
  password: string;
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

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks!: Task[];
}
