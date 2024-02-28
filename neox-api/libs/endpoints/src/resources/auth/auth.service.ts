import { comparePasswords, hashIt } from '@neox-api/shared/utils';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IUser, IUserOmitHash, UsersService } from '../users';
import { AuthDto } from './dto';
import { passwordHandler } from './helpers';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async getCurrentUser(id: string): Promise<IUser> {
    return this.usersService.findById(id);
  }

  async signInLocal(dto: AuthDto): Promise<Tokens> {
    const user = await this.usersService.findOneBy({ email: dto.email });
    const decryptedPassword = passwordHandler(dto.password, true);
    if (user && comparePasswords(decryptedPassword, user.hash)) {
      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRtHash(user.id, tokens.refreshToken);
      return tokens;
    } else {
      throw new UnauthorizedException();
    }
  }

  async signUpLocal(dto: AuthDto): Promise<Tokens> {
    const newUser = await this.usersService.create<IUserOmitHash>(dto);
    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: string): Promise<boolean> {
    await this.usersService.updateRt(userId, null);
    return true;
  }
  async refreshTokens(userId: string, rt: string) {
    const user = await this.usersService.findOneBy({ id: userId });

    if (user && user.hashedRt && comparePasswords(rt, user.hashedRt)) {
      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRtHash(user.id, tokens.refreshToken);
      return tokens;
    } else {
      throw new UnauthorizedException();
    }
  }

  async updateRtHash(userId: string, rt: string) {
    const hash = hashIt(rt);
    await this.usersService.updateRt(userId, hash);
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get('AT_SECRET'),
          expiresIn: 60 * 15, // 15 min
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get('RT_SECRET'),
          expiresIn: 60 * 60 * 24 * 7, // one week
        },
      ),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }
}
