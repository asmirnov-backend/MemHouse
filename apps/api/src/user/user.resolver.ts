import { CreateOneUserArgs } from './@genereted/args/create-one-user.args';
import { FindUniqueUserArgs } from './@genereted/args/find-unique-user.args';
import { User } from './@genereted/models/user.model';
import { UserService } from './user.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args() findUniqueUserArgs: FindUniqueUserArgs): Promise<User | null> {
    return this.userService.getUser(findUniqueUserArgs);
  }

  @Mutation(() => User)
  createUser(@Args() createOneUserArgs: CreateOneUserArgs): Promise<User> {
    return this.userService.createUser(createOneUserArgs);
  }
}
