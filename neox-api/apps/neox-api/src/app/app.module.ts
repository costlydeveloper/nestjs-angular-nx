import { EndpointsModule, User } from '@neox-api/endpoints';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    EndpointsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '3007',
        database: 'main_db',
        entities: [User],
        synchronize: true,
      }),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
