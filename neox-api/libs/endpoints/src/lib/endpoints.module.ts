import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users';

@Module({
  imports: [UsersModule, AuthModule],
})
export class EndpointsModule {}
