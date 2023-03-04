import { ToggleLikeInputDto } from './dto/input/toggleLike.input.dto';
import { MemReactionDto } from './dto/memReaction.model';
import { MemReactionService } from './memReaction.service';

import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserId } from '../auth/jwt/user-id.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => MemReactionDto)
export class MemReactionResolver {
  constructor(private readonly memReactionService: MemReactionService) {}

  @Mutation(() => MemReactionDto)
  @UseGuards(JwtAuthGuard)
  toggleLike(
    @UserId() userId: string,
    @Args('ToggleLikeInputDto') params: ToggleLikeInputDto,
  ): Promise<MemReactionDto> {
    return this.memReactionService.toggleLike({ userId, ...params });
  }
}
