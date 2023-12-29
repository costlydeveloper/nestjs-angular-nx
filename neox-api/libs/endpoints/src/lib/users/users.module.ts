import { DbErrorHandlerModule } from '@neox-api/shared/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DbErrorHandlerModule, TypeOrmModule.forFeature([User])],
  providers: [UsersService, DbErrorHandlerModule],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
