import { Resolver } from '@nestjs/graphql';
import { GqlAuthenticated } from '@/gql-auth';
import { AuthorEntity } from '../entities/author.entity';

@GqlAuthenticated()
@Resolver(() => AuthorEntity)
export class AuthorResolver {
  // constructor(private readonly userService: UserService) {}
  // @Query(() => [AuthorEntity], { name: 'authors' })
  // findAll(): Promise<AuthorEntity[]> {
  //   return this.userService.findAll();
  // }
  // @Query(() => AuthorEntity, { name: 'user', nullable: true })
  // findOne(@Args('id', { type: () => String }) id: string): Promise<UserEntity | null> {
  //   return this.userService.findOne(id);
  // }
}
