import { ObjectType, Field } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@ObjectType()
export class User {
  @Field(() => String, { description: 'user id' })
  id: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'first name' })
  firstName: string;

  @Field(() => String, { description: 'last name' })
  lastName: string;

  @Field(() => String, { description: 'password' })
  @Exclude()
  password: string;
}
