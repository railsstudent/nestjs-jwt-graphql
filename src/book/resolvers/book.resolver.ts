import { forwardRef, Inject } from '@nestjs/common';
import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthenticated } from '@/gql-auth';
import { BookEntity } from '../entities';
import { BookService } from '../services';
import { AuthorService } from '@/author';

@GqlAuthenticated()
@Resolver(() => BookEntity)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    @Inject(forwardRef(() => AuthorService))
    private readonly authorService: AuthorService,
  ) {}

  @Query(() => [BookEntity], { name: 'books' })
  findAll(): Promise<BookEntity[]> {
    return this.bookService.findAll();
  }

  @Query(() => BookEntity, { name: 'book', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string): Promise<BookEntity | null> {
    return this.bookService.findOne(id);
  }

  @Query(() => Int, { name: 'numOfBooks', defaultValue: 0 })
  getNumberOfBooks(): Promise<number> {
    return this.bookService.getNumberOfBooks();
  }

  @ResolveField(() => Int, { description: 'Number of authors', defaultValue: 0, name: 'numOfAuthors' })
  getNumberOfAuthors(@Parent() book: BookEntity): Promise<number> {
    return this.authorService.getNumberOfAuthors(book.id);
  }
  // @ResolveField(() => Int, { description: 'List of authors', name: 'authors' })
  // getAuthors(@Parent() book: BookEntity): Promise<number> {
  //   return this.bookService.getBooksByAuthorId(book.id);
  // }
}
