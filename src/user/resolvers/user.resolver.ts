import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';
import { GqlAuthenticated, GqlCurrentUser } from '../decorators';

@GqlAuthenticated()
@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserEntity], { name: 'users' })
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Query(() => UserEntity, { name: 'user', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string): Promise<UserEntity | null> {
    return this.userService.findOne(id);
  }

  @Query(() => UserEntity, { name: 'whoAmI', nullable: true })
  whoAmI(@GqlCurrentUser() user: UserEntity): Promise<UserEntity | null> {
    return this.userService.findOne(user.id);
  }
}
