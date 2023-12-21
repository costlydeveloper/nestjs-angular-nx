import { CurrentUser, Public } from '@neox-api/shared/utils';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { IUserIdentifier, IUserOmitPassword } from '../users';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('singin')
  signIn(
    @Req() req: Request & { user: IUserOmitPassword },
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(req.user);
  }

  constructor(private authService: AuthService) {}

  @Get('/whoami')
  whoAmI(@CurrentUser() user: IUserIdentifier) {
    return user;
  }

  /*  @Public()
																		  @Post('singin')
																		  @UseGuards(LocalAuthGuard)
																		  signIn(
																			@Res() res: Response,
																		  ): Promise<{ accessToken: string }> {
																			const authCredentialsDto = res.body;
																			console.log(authCredentialsDto);
																			return this.authService.signIn(authCredentialsDto);
																		  }*/

  /*
  
																												  @UseGuards(LocalAuthGuard)
																												  @Public()
																												  @Post('singin')
																												  async singin(@Request() req: { user: IUser }) {
																													console.log(req.user);
																													return this.authService.singin(req.user);
																												  }
																												*/

  /*  @UseGuards(LocalAuthGuard)
																														@Public()
																														@Post('singin')
																														async singnup(@Request() req: { user: IUser }) {
																														  return this.authService.singnup(req.user);
																														}*/
}
