import { UserByIdInput } from './dto/input/userById.input';
import { UserDto } from './dto/user.model';
import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/jwt/jwtAuth.guard';
import { UserId } from '../auth/jwt/userId.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDto)
  userById(
    @Args('UserByIdInput') params: UserByIdInput,
  ): Promise<UserDto | null> {
    return this.userService.getUser({ userId: params.id });
  }

  @Query(() => UserDto)
  @UseGuards(JwtAuthGuard)
  me(@UserId() userId: string): Promise<UserDto | null> {
    return this.userService.getUser({ userId });
  }
}
