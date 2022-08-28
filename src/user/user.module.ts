import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GqlAuthModule } from '@/gql-auth';
import { UserService } from './services';
import { UserResolver } from './resolvers';
import { UserEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), GqlAuthModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
