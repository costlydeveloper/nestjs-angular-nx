import { AtGuard } from '@neox-api/shared/common';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { AtStrategy, RtStrategy } from './strategies';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.register({}),
    /*    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('AT_SECRET'),
        signOptions: {
          expiresIn: 900,
        },
      }),
    }),*/
  ],
  providers: [
    AuthService,
    AtStrategy,
    RtStrategy,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
