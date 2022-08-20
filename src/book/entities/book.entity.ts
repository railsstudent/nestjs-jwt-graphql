import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../entities';

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
}
