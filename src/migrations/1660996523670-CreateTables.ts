import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1660996523670 implements MigrationInterface {
  name = 'CreateTables1660996523670';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "book" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "title" text NOT NULL DEFAULT '', CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "email" character varying NOT NULL, "firstName" character varying NOT NULL DEFAULT '', "lastName" character varying NOT NULL DEFAULT '', "password" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_books_book" ("userId" uuid NOT NULL, "bookId" uuid NOT NULL, CONSTRAINT "PK_baef78b64f8672af581fb995802" PRIMARY KEY ("userId", "bookId"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_ad4911225f9d075e7af4dc2ced" ON "user_books_book" ("userId") `);
    await queryRunner.query(`CREATE INDEX "IDX_17480627c54e46bc745098954e" ON "user_books_book" ("bookId") `);
    await queryRunner.query(
      `ALTER TABLE "user_books_book" ADD CONSTRAINT "FK_ad4911225f9d075e7af4dc2cede" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_books_book" ADD CONSTRAINT "FK_17480627c54e46bc745098954e3" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_books_book" DROP CONSTRAINT "FK_17480627c54e46bc745098954e3"`);
    await queryRunner.query(`ALTER TABLE "user_books_book" DROP CONSTRAINT "FK_ad4911225f9d075e7af4dc2cede"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_17480627c54e46bc745098954e"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_ad4911225f9d075e7af4dc2ced"`);
    await queryRunner.query(`DROP TABLE "user_books_book"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "book"`);
  }
}
