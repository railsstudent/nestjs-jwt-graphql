import { Module } from '@nestjs/common';
import { UserService } from './services';
import { UserResolver } from './resolvers';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
