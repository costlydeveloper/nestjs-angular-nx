import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CleanDbModule } from './clean-db-test/clean-db-module';
import { PersonModule } from './person';
import { UsersModule } from './users';

@Module({
  imports: [UsersModule, AuthModule, PersonModule, CleanDbModule],
})
export class EndpointsModule {}
