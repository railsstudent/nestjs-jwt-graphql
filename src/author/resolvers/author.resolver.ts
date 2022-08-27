import { forwardRef, Inject } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthenticated } from '@/gql-auth';
import { AuthorEntity } from '../entities';
import { AuthorService } from '../services';
import { BookEntity, BookService } from '@/book';

@GqlAuthenticated()
@Resolver(() => AuthorEntity)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    @Inject(forwardRef(() => BookService)) private bookService: BookService,
  ) {}

  @Query(() => [AuthorEntity], { name: 'authors' })
  findAll(): Promise<AuthorEntity[]> {
    return this.authorService.findAll();
  }

  @Query(() => AuthorEntity, { name: 'author', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string): Promise<AuthorEntity | null> {
    return this.authorService.findOne(id);
  }

  @ResolveField(() => [BookEntity], { name: 'books', description: 'Books written by the author', nullable: true })
  findBooks(@Parent() author: AuthorEntity): Promise<BookEntity[] | null> {
    return this.bookService.getBooksByAuthorId(author.id);
  }
}
