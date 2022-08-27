import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookEntity } from '../entities';

@Injectable()
export class BookRepository extends Repository<BookEntity> {
  constructor(dataSource: DataSource) {
    super(BookEntity, dataSource.createEntityManager(), dataSource.createQueryRunner());
  }

  findBooksByAuthorId(authorId: string): Promise<BookEntity[]> {
    return this.findBy({
      authors: {
        id: authorId,
      },
    });
  }
}
