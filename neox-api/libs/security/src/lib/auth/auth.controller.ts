/*
import { IUser } from '@neox-api/endpoints';
import { Public } from '@neox-api/shared/utils';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';


@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req: { user: IUser }) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: IUser }) {
    return req.user;
  }
}
*/
