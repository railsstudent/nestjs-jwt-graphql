import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@/entities';
import { Exclude } from 'class-transformer';

@Entity()
@ObjectType()
export class UserEntity extends AbstractEntity {
  @Column('varchar', { nullable: false })
  @Field(() => String, { description: 'email' })
  email: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'first name' })
  firstName: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'last name' })
  lastName: string;

  @Column('text', { nullable: false })
  @Exclude()
  @Field(() => String, { description: 'password' })
  password: string;
}
