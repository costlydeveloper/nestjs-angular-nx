import { BaseEntityService } from '@neox-api/shared/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../users';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { ITask, Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService extends BaseEntityService<ITask> {
  constructor(private readonly tasksRepository: TasksRepository) {
    super(tasksRepository);
  }

  /*findAll(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
	  return this.tasksRepository.find();
  
	  // return this.tasksRepository.getTasks(filterDto, user);
	}*/

  async getTaskById(id: string, user: User): Promise<Task> {
    /*const found = await this.tasksRepository.findOne({
									  where: { id, user: { id: user.id } },
									});*/
    const found = await this.tasksRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: string, user: User): Promise<void> {
    // const result = await this.tasksRepository.delete({ id, user });
    /*const result = await this.tasksRepository.delete({
									  id,
									  user: { id: user.id },
									}); */
    const result = await this.tasksRepository.delete({
      id,
    });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user);

    task.status = status;
    await this.tasksRepository.save(task);

    return task;
  }
}
