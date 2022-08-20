import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../entities';

@Entity('book')
export class BookEntity extends AbstractEntity {
  @Column('text', { nullable: false, default: '' })
  title: string;

  @Column('text', { nullable: false, default: '' })
  isbn: string;

  @Column('integer', { nullable: false })
  publicationYear: number;
}
