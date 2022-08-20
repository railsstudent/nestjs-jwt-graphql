import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './services';
import { UserResolver } from './resolvers';
import { UserEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
