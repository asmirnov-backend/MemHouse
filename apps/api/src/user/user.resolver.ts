import { UserCreateInput } from './dto/input/user-create.input';
import { UserUniqueInput } from './dto/input/user-get-unique.input';
import { User } from './dto/user.model';
import { UserService } from './user.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args('UserUniqueInput') params: UserUniqueInput): Promise<User | null> {
    return this.userService.getUser(params);
  }

  @Mutation(() => User)
  createUser(@Args('UserCreateInput') params: UserCreateInput): Promise<User> {
    return this.userService.createUser(params);
  }
}
