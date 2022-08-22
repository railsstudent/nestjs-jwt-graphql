import { Injectable } from '@nestjs/common';
import { BookEntity } from '../entities';
import { BookRepository } from '../repositories';

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  getBooksByAuthorId(authorId: string): Promise<BookEntity[]> {
    return this.bookRepository.findBooksByAuthorId(authorId);
  }

  findAll(): Promise<BookEntity[]> {
    return this.bookRepository.find();
  }

  findOne(id: string): Promise<BookEntity | null> {
    return this.bookRepository.findBookWithAuthors(id);
  }
}
