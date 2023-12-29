import { comparePasswords, Nullable } from '@neox-api/shared/utils';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IUserOmitPassword, UsersService } from '../../users';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(request: Request, username: string, password: string) {
    //const contextId = ContextIdFactory.getByRequest(request);
    //const authService = await this.moduleRef.resolve(AuthService, contextId);
    //const user = await authService.validateUser(username, password);
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<Nullable<IUserOmitPassword>> {
    const storedUser = await this.usersService.findByUsername(username);
    if (storedUser && comparePasswords(password, storedUser.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = storedUser;
      return userWithoutPassword;
    }
    return null;
  }
}
