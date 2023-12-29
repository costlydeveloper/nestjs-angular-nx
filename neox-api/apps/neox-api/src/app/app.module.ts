import { EndpointsModule, User } from '@neox-api/endpoints';
import { environmentGlobal } from '@neox-api/platform';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    EndpointsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: environmentGlobal.database.type,
          host: environmentGlobal.database.host,
          port: environmentGlobal.database.port,
          username: environmentGlobal.database.username,
          password: environmentGlobal.database.password,
          database: environmentGlobal.database.database,
          synchronize: !environmentGlobal.production,
          entities: [User],
        } as DataSourceOptions;
      },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
