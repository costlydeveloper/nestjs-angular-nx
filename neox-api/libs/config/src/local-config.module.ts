import { configValidationSchema, databaseConfig } from '@neox-api/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dotenvConfig } from './dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dotenvConfig, databaseConfig],
      validationSchema: configValidationSchema,
    }),
  ],
})
export class LocalConfigModule {}
