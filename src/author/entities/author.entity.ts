import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../../entities';
import { BookEntity } from '../../book/entities/book.entity';

@Entity('author')
@ObjectType({ description: 'Author Model' })
export class AuthorEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'first name of author' })
  firstName: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'last name of author' })
  lastName: string;

  @ManyToMany(() => BookEntity, (book) => book.authors)
  @JoinTable()
  @Field(() => [BookEntity], { description: 'Books written by author', nullable: true })
  books?: BookEntity[];
}
