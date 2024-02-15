import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DatabaseConfig from './database/database.config';
import AppConfig from './dotenv/env.config';
import { configValidationSchema } from './dotenv/env.config.schema';

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
