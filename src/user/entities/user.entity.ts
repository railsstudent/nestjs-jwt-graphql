import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { AbstractEntity } from '../../entities';

@Entity('user')
@ObjectType({ description: 'User Model' })
export class UserEntity extends AbstractEntity {
  @Column('varchar', { nullable: false })
  @Field(() => String, { description: 'email of user' })
  email: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'first name of user' })
  firstName: string;

  @Column('varchar', { nullable: false, default: '' })
  @Field(() => String, { description: 'last name of user' })
  lastName: string;

  @Column('text', { nullable: false })
  @Exclude()
  @Field(() => String, { description: 'password of user' })
  password: string;
}
