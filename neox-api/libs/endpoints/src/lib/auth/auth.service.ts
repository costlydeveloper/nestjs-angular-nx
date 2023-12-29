import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserOmitPassword, UsersService } from '../users';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { IJwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    userWithoutPassword: IUserOmitPassword,
  ): Promise<{ accessToken: string }> {
    const payload: IJwtPayload = {
      username: userWithoutPassword.username,
      sub: userWithoutPassword.id,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signUp(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<IUserOmitPassword> {
    return this.usersService.create(authCredentialsDto);
  }
}
