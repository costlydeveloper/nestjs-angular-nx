import { Module } from '@nestjs/common';
import { LoggerModule } from './logger';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [LoggerModule],
})
export class SharedUtilsModule {}
