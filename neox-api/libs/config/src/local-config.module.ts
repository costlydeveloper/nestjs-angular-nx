import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './dotenv';
import DatabaseConfig from './dotenv/database.config';
import AppConfig from './dotenv/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
      //envFilePath: [`.env.stage.${process.env['STAGE']}`],
      validationSchema: configValidationSchema,
    }),
  ],
})
export class LocalConfigModule {}
