import { ToggleLikeInputDto } from './dto/input/toggleLike.input.dto';
import { MemReactionDto } from './dto/memReaction.model';
import { ToggleLikeOutputDto } from './dto/output/toggleLike.output.dto';
import { MemReactionService } from './memReaction.service';

import { JwtAuthGuard } from '../auth/jwt/jwtAuth.guard';
import { UserId } from '../auth/jwt/userId.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => MemReactionDto)
export class MemReactionResolver {
  constructor(private readonly memReactionService: MemReactionService) {}

  @Mutation(() => ToggleLikeOutputDto)
  @UseGuards(JwtAuthGuard)
  toggleLike(
    @UserId() userId: string,
    @Args('ToggleLikeInputDto') params: ToggleLikeInputDto,
  ): Promise<ToggleLikeOutputDto> {
    return this.memReactionService.toggleLike({ userId, ...params });
  }
}
