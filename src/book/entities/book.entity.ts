import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../../entities';
import { AuthorEntity } from '@/author/entities';
import { GENRE } from '../enums';

@Entity('book')
@ObjectType({ description: 'Book Model' })
export class BookEntity extends AbstractEntity {
  @Column('text', { nullable: false, default: '' })
  @Field(() => String, { nullable: false, defaultValue: '', description: 'Title of book' })
  title: string;

  @Column('text', { nullable: false, default: '' })
  @Field(() => String, { nullable: false, defaultValue: '', description: 'ISBN of book' })
  isbn: string;

  @Column('integer', { nullable: false })
  @Field(() => Int, { nullable: false, description: 'Publication year of book' })
  publicationYear: number;

  @Column('integer', { nullable: false, default: 0 })
  @Field(() => Int, { nullable: false, description: 'Total number of pages' })
  totalPages: number;

  @Column('varchar', { nullable: false, default: GENRE.MYSTERY })
  @Field(() => String, { nullable: false, description: 'Genre of literature' })
  genre: GENRE;

  @ManyToMany(() => AuthorEntity, (author) => author.books)
  @Field(() => [AuthorEntity], { description: 'All authors of the book', nullable: false })
  authors: AuthorEntity[];
}
