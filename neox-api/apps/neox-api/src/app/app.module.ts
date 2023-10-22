import { User, UsersModule } from '@neox-api/endpoints';
import { AuthModule } from '@neox-api/security';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'main_db',
        entities: [User],
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
