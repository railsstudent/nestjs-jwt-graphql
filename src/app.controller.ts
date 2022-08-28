import { Controller, Get } from '@nestjs/common';
import { Authenticated, CurrentUser } from '@/auth';
import { ValidatedUser } from '@/user';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jwt-user')
  @Authenticated()
  getJwtUser(@CurrentUser() user: ValidatedUser): ValidatedUser {
    return user;
  }

  @Get('jwt-email')
  @Authenticated()
  getJwtEmail(@CurrentUser('email') email: string): string {
    return email;
  }
}
