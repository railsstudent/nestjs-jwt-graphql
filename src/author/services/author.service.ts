import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../entities';
import { AuthorRepository } from '../repositories';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(AuthorEntity) private authorRepository: AuthorRepository) {}

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
}
