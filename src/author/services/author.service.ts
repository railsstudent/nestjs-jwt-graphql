import { Injectable } from '@nestjs/common';
import { AuthorEntity } from '../entities';
import { AuthorRepository } from '../repositories';

@Injectable()
export class AuthorService {
  constructor(private authorRepository: AuthorRepository) {}

  findAll(): Promise<AuthorEntity[]> {
    return this.authorRepository.find();
  }

  findOne(id: string): Promise<AuthorEntity | null> {
    return this.authorRepository.findOneBy({
      id,
    });
  }

  getNumberOfAuthors(bookId: string): Promise<number> {
    return this.authorRepository.getNumberOfAuthors(bookId);
  }

  async getAuthorsByBookId(bookId: string): Promise<AuthorEntity[]> {
    return this.authorRepository.getAuthorsByBookId(bookId);
  }
}
