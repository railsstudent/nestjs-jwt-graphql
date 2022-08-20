import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from '../../entities';
import { BookEntity } from '../../book';

@Entity('author')
@ObjectType()
export class AuthorEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'first name' })
  firstName: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'last name' })
  lastName: string;

  @ManyToMany(() => BookEntity)
  @JoinTable()
  books?: BookEntity[];
}
