import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { AuthorModule } from '@/author';
import { BookEntity } from './entities';
import { BookRepository } from './repositories';
import { BookService } from './services';
import { BookResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity]), forwardRef(() => AuthorModule)],
  providers: [BookRepository, BookService, BookResolver],
  exports: [BookService],
})
export class BookModule {}
