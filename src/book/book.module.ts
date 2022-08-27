import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { BookEntity } from './entities';
import { BookRepository } from './repositories';
import { BookService } from './services';
import { BookResolver } from './resolvers';
import { AuthorModule } from '@/author';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity]), forwardRef(() => AuthorModule)],
  providers: [BookRepository, BookService, BookResolver],
  exports: [BookService],
})
export class BookModule {}
