import { Module } from '@nestjs/common';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
