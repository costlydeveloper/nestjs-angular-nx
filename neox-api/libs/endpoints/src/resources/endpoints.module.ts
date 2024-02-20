import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './person';
import { UsersModule } from './users';

@Module({
  imports: [UsersModule, AuthModule, PersonModule],
})
export class EndpointsModule {}
