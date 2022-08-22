import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookEntity } from './entities';
import { BookRepository } from './repositories';
import { BookService } from './services';
import { BookResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookRepository, BookService, BookResolver],
  exports: [BookService],
})
export class BookModule {}
