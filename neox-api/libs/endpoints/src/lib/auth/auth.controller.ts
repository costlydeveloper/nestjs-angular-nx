import { CurrentUser, Public } from '@neox-api/shared/utils';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { IUserIdentifier, IUserOmitPassword } from '../users';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('signin')
  signIn(
    @Req() req: Request & { user: IUserOmitPassword },
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(req.user);
  }

  @Public()
  @Post('signup')
  async signUp(@Body() body: AuthCredentialsDto) {
    return this.authService.signUp(body);
  }

  @Get('/whoami')
  whoAmI(@CurrentUser() user: IUserIdentifier) {
    return user;
  }
}
