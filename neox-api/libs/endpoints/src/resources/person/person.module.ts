import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './person-repository.service';
import { PersonController } from './person.controller';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
})
export class PersonModule {}
