import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from '@/book';
import { GqlAuthModule } from '@/gql-auth';
import { AuthorEntity } from './entities';
import { AuthorResolver } from './resolvers';
import { AuthorService } from './services';
import { AuthorRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity]), GqlAuthModule, forwardRef(() => BookModule)],
  providers: [AuthorResolver, AuthorService, AuthorRepository],
  exports: [AuthorService],
})
export class AuthorModule {}
