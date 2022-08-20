import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthorTable1660998075233 implements MigrationInterface {
  name = 'CreateAuthorTable1660998075233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "author" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "firstName" character varying NOT NULL DEFAULT '', "lastName" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "author_books_book" ("authorId" uuid NOT NULL, "bookId" uuid NOT NULL, CONSTRAINT "PK_6b6bf224c7ce78773e95bded3f2" PRIMARY KEY ("authorId", "bookId"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_e9ac29df6d093aa0b8079f1d15" ON "author_books_book" ("authorId") `);
    await queryRunner.query(`CREATE INDEX "IDX_34342925729041ac5301b289a9" ON "author_books_book" ("bookId") `);
    await queryRunner.query(`ALTER TABLE "book" ADD "isbn" text NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "book" ADD "publicationYear" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books_book" ADD CONSTRAINT "FK_34342925729041ac5301b289a9a" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_34342925729041ac5301b289a9a"`);
    await queryRunner.query(`ALTER TABLE "author_books_book" DROP CONSTRAINT "FK_e9ac29df6d093aa0b8079f1d151"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "publicationYear"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "isbn"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_34342925729041ac5301b289a9"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e9ac29df6d093aa0b8079f1d15"`);
    await queryRunner.query(`DROP TABLE "author_books_book"`);
    await queryRunner.query(`DROP TABLE "author"`);
  }
}
