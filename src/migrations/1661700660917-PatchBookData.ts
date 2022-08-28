import { MigrationInterface, QueryRunner } from 'typeorm';
import { faker } from '@faker-js/faker';
import { GENRE } from '../book/enums';

export class PatchBookData1661700660917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.HISTORICAL,
      '7d7f2c16-252c-4be1-9eeb-56fdb8cef803',
    ]);
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.HORROR,
      'bd17f885-a0b9-44e9-9e29-a37ca91d421c',
    ]);
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.MYSTERY,
      '1502c071-e0bb-423e-9dab-3315b9b374ad',
    ]);
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.ROMANCE,
      'c8c720e2-92f0-4e87-8f9c-aaa95613f193',
    ]);
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.THRILLER,
      'a323ac86-34d7-41f2-867a-1137280566f5',
    ]);
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2 where "id" = $3`, [
      faker.datatype.number({
        min: 20,
        max: 1000,
      }),
      GENRE.WESTERN,
      'd1f88119-f3e0-4fa6-b082-9010252fa439',
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE "book" set "totalPages" = $1, "genre" = $2`, [0, 'Mystery']);
  }
}
