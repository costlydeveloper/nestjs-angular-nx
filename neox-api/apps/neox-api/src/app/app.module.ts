import { LocalConfigModule } from '@neox-api/config';
import { DatabaseModule } from '@neox-api/db';
import { EndpointsModule } from '@neox-api/endpoints';
import { LoggerModule } from '@neox-api/shared/utils';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [LocalConfigModule, LoggerModule, EndpointsModule, DatabaseModule],
  providers: [AppService],
})
export class AppModule {}
