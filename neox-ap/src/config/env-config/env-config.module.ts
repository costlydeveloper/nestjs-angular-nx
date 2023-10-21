import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfigService } from './env-config.service';

@Module({
  providers: [EnvConfigService, ConfigService],
  exports: [EnvConfigService],
})
export class EnvConfigModule {}
