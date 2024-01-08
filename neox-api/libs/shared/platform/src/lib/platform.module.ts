import { Module } from '@nestjs/common';
import { EnvConfigModule } from './env-config/env-config.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [EnvConfigModule],
})
export class PlatformModule {}
