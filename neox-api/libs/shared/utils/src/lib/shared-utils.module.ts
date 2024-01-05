import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [LoggerModule],
})
export class SharedUtilsModule {}
