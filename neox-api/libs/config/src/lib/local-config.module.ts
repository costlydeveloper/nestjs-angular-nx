import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppConfig from './app.config';
import { configValidationSchema } from './config.schema';
import DatabaseConfig from './database.config';

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
