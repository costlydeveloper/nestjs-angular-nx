import { MESSAGE } from '@neox-api/shared/common';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../types';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('RT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: any, payload: JwtPayload) {
    const refreshToken = req.headers['authorization']
      ? req.headers['authorization'].replace('Bearer ', '').trim()
      : null;

    if (!refreshToken)
      throw new ForbiddenException(MESSAGE.ERROR.REFRESH_TOKEN_MALFORMED);

    return {
      ...payload,
      refreshToken,
    };
  }
}
