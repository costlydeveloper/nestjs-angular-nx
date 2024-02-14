import { BaseController } from '@neox-api/shared/common';
import { GetCurrentUser } from '@neox-api/shared/utils';
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '../users';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { ITask, Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiBearerAuth()
@ApiTags('Tasks')
export class TasksController extends BaseController<ITask> {
  private logger = new Logger('TasksController');

  constructor(private tasksService: TasksService) {
    super(tasksService);
  }

  @Get()
  findAll(
    @Query() filterDto: GetTasksFilterDto,
    @GetCurrentUser() user: User,
  ): Promise<ITask[]> {
    this.logger.verbose(
      `User "${user.email}" retrieving all tasks. Filters: ${JSON.stringify(
        filterDto,
      )}`,
    );
    return this.tasksService.findAll();
    //return this.tasksService.findAll(filterDto, user);
  }

  /*  @Get('/:id')
				getTaskById(
				  @Param('id') id: string,
				  @CurrentUser() user: User,
				): Promise<Task> {
				  return this.tasksService.getTaskById(id, user);
				}*/

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetCurrentUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(
      `User "${user.email}" creating a new task. Data: ${JSON.stringify(
        createTaskDto,
      )}`,
    );
    return this.tasksService.createTask(createTaskDto, user);
  }

  /*
			  @Delete('/:id')
			  deleteTask(
				@Param('id') id: string,
				@CurrentUser() user: User,
			  ): Promise<void> {
				return this.tasksService.deleteTask(id, user);
			  }
			*/

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    @GetCurrentUser() user: User,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status, user);
  }
}
