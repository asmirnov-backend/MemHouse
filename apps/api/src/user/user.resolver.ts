import { UserByIdInput } from './dto/input/user-by-id.input';
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
  userById(@Args('UserByIdInput') params: UserByIdInput): Promise<User | null> {
    return this.userService.getUser({ userId: params.id });
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  me(@UserId() userId: string): Promise<User | null> {
    return this.userService.getUser({ userId });
  }
}
