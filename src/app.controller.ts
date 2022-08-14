import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Authenticated, CurrentUser, GqlAuthenticated } from './auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jwt-hello')
  @Authenticated()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getJwtHello(@CurrentUser() user: any): any {
    return user;
  }

  @Get('gql-hello')
  @GqlAuthenticated()
  getGqlHello(): string {
    return this.appService.getHello();
  }
}
