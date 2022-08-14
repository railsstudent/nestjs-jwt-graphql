import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { GqlAuthenticated, GqlCurrentUser } from '../decorators';

@GqlAuthenticated()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string): User | undefined {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'whoAmI', nullable: true })
  whoAmI(@GqlCurrentUser() user: User): User {
    return this.userService.findOne(user.id);
  }
}
