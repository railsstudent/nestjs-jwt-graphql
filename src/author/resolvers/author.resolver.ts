import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthenticated } from '@/gql-auth';
import { AuthorEntity } from '../entities';
import { AuthorService } from '../services';

@GqlAuthenticated()
@Resolver(() => AuthorEntity)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorEntity], { name: 'authors' })
  findAll(): Promise<AuthorEntity[]> {
    return this.authorService.findAll();
  }

  @Query(() => AuthorEntity, { name: 'author', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string): Promise<AuthorEntity | null> {
    return this.authorService.findOne(id);
  }
}
