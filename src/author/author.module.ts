import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities';
import { GqlAuthModule } from '../gql-auth';
import { AuthorResolver } from './resolvers';
import { AuthorService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity]), GqlAuthModule],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
