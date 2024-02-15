import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users';

@Module({
  imports: [TasksModule, UsersModule, AuthModule],
})
export class EndpointsModule {}
