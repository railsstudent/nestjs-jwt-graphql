import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities';
import { GqlAuthModule } from '@/gql-auth';
import { AuthorResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity]), GqlAuthModule],
  providers: [AuthorResolver],
})
export class AuthorModule {}
