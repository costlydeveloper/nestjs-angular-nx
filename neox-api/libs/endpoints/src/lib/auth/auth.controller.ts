import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
  RtGuard,
} from '@neox-api/shared/utils';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IUserIdentifier } from '../users';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /*
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('signin')
  @ApiBody({ type: AuthDto })
  signIn(@Req() req: Request & { user: IUserOmitPassword }): Promise<Tokens> {
    return this.authService.signIn(req.user);
  }
*/

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUpLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signUpLocal(dto);
  }

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signInLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signInLocal(dto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string): Promise<boolean> {
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('whoami')
  whoAmI(@GetCurrentUser() user: IUserIdentifier) {
    return user;
    // return 'sdfsdfsdfsdf';
  }
}
