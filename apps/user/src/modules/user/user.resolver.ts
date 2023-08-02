import { UpdateCurrentUserInput } from './dto/input/updateCurrentUser.input';
import { UserByIdInput } from './dto/input/userById.input';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

import { UserId } from '../../../../../libs/common/src/decorators/userId.decorator';
import { JwtAuthGuard } from '../../../../../libs/common/src/guards/jwtAuth.guard';

import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel)
  userById(
    @Args('UserByIdInput') input: UserByIdInput,
  ): Promise<UserModel | null> {
    return this.userService.getUser({ userId: input.id });
  }

  @Query(() => UserModel)
  @UseGuards(JwtAuthGuard)
  me(@UserId() userId: string): Promise<UserModel | null> {
    return this.userService.getUser({ userId });
  }

  @Mutation(() => UserModel)
  @UseGuards(JwtAuthGuard)
  updateCurrentUser(
    @Args('UpdateCurrentUserInput') input: UpdateCurrentUserInput,
    @UserId() userId: string,
  ): Promise<UserModel> {
    return this.userService.updateUser({ userId, ...input });
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: UserModel['id'];
  }): Promise<UserModel | null> {
    return this.userService.getUser({ userId: reference.id });
  }
}
