import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteUserBooksBookTable1660998201291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE IF EXISTS "user_books_book" DROP CONSTRAINT "FK_17480627c54e46bc745098954e3"`);
    await queryRunner.query(`ALTER TABLE IF EXISTS "user_books_book" DROP CONSTRAINT "FK_ad4911225f9d075e7af4dc2cede"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "public"."IDX_17480627c54e46bc745098954e"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "public"."IDX_ad4911225f9d075e7af4dc2ced"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "user_books_book"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('SELECT 1;');
  }
}
