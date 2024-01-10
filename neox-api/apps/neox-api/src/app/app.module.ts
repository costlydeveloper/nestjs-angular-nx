import { LocalConfigModule } from '@neox-api/config';
import { EndpointsModule, ExposedEntities } from '@neox-api/endpoints';
import { LoggerModule } from '@neox-api/shared/utils';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    LocalConfigModule,
    LoggerModule,
    EndpointsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          ...configService.get('database'),
          entities: ExposedEntities,
        };
      },
      /*      useFactory: async (configService: ConfigService) => {
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
				  },*/
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
