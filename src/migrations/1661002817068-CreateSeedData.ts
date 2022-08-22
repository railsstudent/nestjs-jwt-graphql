import { MigrationInterface, QueryRunner } from 'typeorm';
import { faker } from '@faker-js/faker';

export class CreateSeedData1661002817068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const promises: Promise<any>[] = [];

    for (let i = 0; i < 3; i++) {
      const email = faker.internet.email();
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const password = faker.internet.password();
      promises.push(
        queryRunner.query(
          `INSERT INTO "user"("id", "email", "firstName", "lastName", "password") values(uuid_generate_v4(), $1, $2, $3, $4)`,
          [email, firstName, lastName, password],
        ),
      );
    }

    const authorPromises: Promise<any>[] = [];
    for (let i = 0; i < 3; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      authorPromises.push(
        queryRunner.query(
          `INSERT INTO "author"("id", "firstName", "lastName") values(uuid_generate_v4(), $1, $2) RETURNING id;
        `,
          [firstName, lastName],
        ),
      );
    }

    const bookPromises: Promise<any>[] = [];
    for (let i = 0; i < 6; i++) {
      const title = faker.company.name();
      const isbn = faker.random.alphaNumeric(12);
      const publicationYear = Math.min(faker.datatype.datetime().getFullYear(), new Date().getFullYear());
      bookPromises.push(
        queryRunner.query(
          `INSERT INTO "book"("id", "title", "isbn", "publicationYear") values(uuid_generate_v4(), $1, $2, $3) RETURNING id;`,
          [title, isbn, publicationYear],
        ),
      );
    }

    await Promise.all(promises);
    const authors: { id: string }[][] = await Promise.all(authorPromises);
    const authorIds = authors.map((record) => record[0].id);
    const books: { id: string }[][] = await Promise.all(bookPromises);
    const bookIds = books.map((record) => record[0].id);

    const authorBookSql = 'INSERT INTO "author_books_book"("authorId", "bookId") values($1, $2);';
    await queryRunner.query(authorBookSql, [authorIds[0], bookIds[0]]);
    await queryRunner.query(authorBookSql, [authorIds[0], bookIds[1]]);
    await queryRunner.query(authorBookSql, [authorIds[0], bookIds[2]]);
    await queryRunner.query(authorBookSql, [authorIds[1], bookIds[2]]);
    await queryRunner.query(authorBookSql, [authorIds[0], bookIds[3]]);
    await queryRunner.query(authorBookSql, [authorIds[1], bookIds[3]]);
    await queryRunner.query(authorBookSql, [authorIds[1], bookIds[4]]);
    await queryRunner.query(authorBookSql, [authorIds[1], bookIds[5]]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "author_books_book"');
    await queryRunner.query('DELETE FROM "book"');
    await queryRunner.query('DELETE FROM "author"');
    await queryRunner.query('DELETE FROM "user"');
  }
}
