import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
})
export class BookModule {}
