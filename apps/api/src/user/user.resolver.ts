import { UserUniqueInput } from './dto/input/user-get-unique.input';
import { User } from './dto/user.model';
import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserId } from '../auth/jwt/user-id.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args('UserUniqueInput') params: UserUniqueInput): Promise<User | null> {
    return this.userService.getUser(params);
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  me(@UserId() userId: string): Promise<User | null> {
    return this.userService.getUser({ id: userId });
  }
}
