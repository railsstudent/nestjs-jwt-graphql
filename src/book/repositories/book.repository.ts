import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookEntity } from '../entities';

@Injectable()
export class BookRepository extends Repository<BookEntity> {
  constructor(dataSource: DataSource) {
    super(BookEntity, dataSource.createEntityManager());
  }

  findBooksByAuthorId(authorId: string): Promise<BookEntity[]> {
    return this.createQueryBuilder('book')
      .innerJoinAndSelect('book.authors', 'authors')
      .where('authors.id = :authorId', { authorId })
      .getMany();
  }

  findBookWithAuthors(id: string): Promise<BookEntity | null> {
    return this.findOne({
      where: {
        id,
        authors: true,
      },
    });
  }
}
