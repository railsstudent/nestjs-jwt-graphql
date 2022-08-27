import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthorEntity } from '../entities';

@Injectable()
export class AuthorRepository extends Repository<AuthorEntity> {
  constructor(dataSource: DataSource) {
    super(AuthorEntity, dataSource.createEntityManager(), dataSource.createQueryRunner());
  }

  async getNumberOfAuthors(bookId: string): Promise<number> {
    return this.count({
      where: {
        books: {
          id: bookId,
        },
      },
    });
  }
}
