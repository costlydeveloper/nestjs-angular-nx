import { EndpointsModule, ExposedEntities } from '@neox-api/endpoints';
import { EnvConfigModule, environmentGlobal } from '@neox-api/platform';
import { LoggerModule } from '@neox-api/shared/utils';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvConfigModule,
    LoggerModule,
    EndpointsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: environmentGlobal.database.type,
          synchronize: !environmentGlobal.production,
          autoloadEntities: environmentGlobal.database.autoloadEntities,
          entities: ExposedEntities,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        } as DataSourceOptions;
      },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
