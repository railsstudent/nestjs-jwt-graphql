import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookEntity } from './entities';
import { BookRepository } from './repositories';
import { BookService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookRepository, BookService],
  exports: [BookService],
})
export class BookModule {}
