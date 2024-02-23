import { LocalConfigModule } from '@neox-api/config';
import { DatabaseModule } from '@neox-api/db';
import { LoggerModule } from '@neox-api/shared/utils';
import { Module } from '@nestjs/common';

@Module({
  imports: [LocalConfigModule, LoggerModule, DatabaseModule],
  providers: [],
})
export class AppModule {}
