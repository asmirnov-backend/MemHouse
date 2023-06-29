import { UserByIdInput } from './dto/input/userById.input';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

import { UserId } from '../../../../libs/common/src/decorators/userId.decorator';
import { JwtAuthGuard } from '../../../../libs/common/src/guards/jwtAuth.guard';

import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel)
  userById(
    @Args('UserByIdInput') params: UserByIdInput,
  ): Promise<UserModel | null> {
    return this.userService.getUser({ userId: params.id });
  }

  @Query(() => UserModel)
  @UseGuards(JwtAuthGuard)
  me(@UserId() userId: string): Promise<UserModel | null> {
    return this.userService.getUser({ userId });
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: UserModel['id'];
  }): Promise<UserModel | null> {
    return this.userService.getUser({ userId: reference.id });
  }
}
