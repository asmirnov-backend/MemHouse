import { UserService } from './user.service';

import { CreateUserInput, IMutation, IQuery, User } from '@api/graphql.schema';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver
  implements Pick<IQuery, 'user'>, Pick<IMutation, 'createUser'>
{
  constructor(private readonly userService: UserService) {}

  @Query()
  user(@Args('id') id: string): (User | null) | Promise<User | null> {
    return this.userService.getUser(id);
  }

  @Mutation()
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): User | Promise<User> {
    return this.userService.createUser(createUserInput);
  }
}
