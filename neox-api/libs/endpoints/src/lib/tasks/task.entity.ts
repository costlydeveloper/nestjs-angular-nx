import { BaseEntity, IBaseEntity } from '@neox-api/shared/common';
import { Nullable } from '@neox-api/shared/utils';
import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../users';
import { TaskStatus } from './task-status.enum';

export interface ITask extends IBaseEntity {
  title: Nullable<string>;
  description: Nullable<string>;
  status: TaskStatus;
}

@Entity()
export class Task extends BaseEntity implements ITask {
  @Column({ type: 'varchar', nullable: true })
  title: Nullable<string> = null;

  @Column({ type: 'varchar', nullable: true })
  description: Nullable<string> = null;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
  status!: TaskStatus;

  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  @Exclude({ toPlainOnly: true })
  user!: User;
}
