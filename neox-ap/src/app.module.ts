import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EnvConfigModule } from './config/env-config/env-config.module';
import { EnvConfigService } from './config/env-config/env-config.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: ['./../.env'],
      /*  envFilePath: !process.env.NODE_ENV
							? '.env.dev'
							: `.env.dev.${process.env.NODE_ENV}`,*/
    }),
    TypeOrmModule.forRootAsync({
      imports: [EnvConfigModule],
      inject: [EnvConfigService],
      useFactory: (configService: EnvConfigService) => ({
        type: 'mysql',
        host:
          process.env.NODE_ENV === 'devdocker'
            ? configService.get('DATABASE_HOST')
            : '127.0.0.1',
        port: +configService.get('DATABASE_PORT')!,
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASS'),
        database: configService.get('DATABASE_NAME'),
        entities: [User],
        synchronize: true,
      }),
    }),
  ],

  /*
																									*  host: configService.get<IDatabaseConfig>('database')!.host,
																										  port: configService.get<IDatabaseConfig>('database')!.port,
																										  username: configService.get<IDatabaseConfig>('database')!.username,
																										  password: configService.get<IDatabaseConfig>('database')!.password,
																										  database: configService.get<IDatabaseConfig>('database')!.mainDbName,*/
  providers: [AppService],
})
export class AppModule {}
