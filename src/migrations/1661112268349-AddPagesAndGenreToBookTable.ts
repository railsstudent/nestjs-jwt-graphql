import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPagesAndGenreToBookTable1661112268349 implements MigrationInterface {
  name = 'AddPagesAndGenreToBookTable1661112268349';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "book" ADD "totalPages" integer NOT NULL DEFAULT '0'`);
    await queryRunner.query(`ALTER TABLE "book" ADD "genre" character varying NOT NULL DEFAULT 'Mystery'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "genre"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "totalPages"`);
  }
}
