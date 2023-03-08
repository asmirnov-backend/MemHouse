import { DislikeReactionService } from './dislikeReaction.service';
import { ToggleReactionInputDto } from './dto/input/toggleReaction.input.dto';
import { MemReactionDto } from './dto/memReaction.model';
import { ToggleReactionOutputDto } from './dto/output/toggleReaction.output.dto';
import { LikeReactionService } from './likeReaction.service';

import { JwtAuthGuard } from '../auth/jwt/jwtAuth.guard';
import { UserId } from '../auth/jwt/userId.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => MemReactionDto)
export class MemReactionResolver {
  constructor(
    private readonly likeReactionService: LikeReactionService,
    private readonly dislikeReactionService: DislikeReactionService,
  ) {}

  @Mutation(() => ToggleReactionOutputDto)
  @UseGuards(JwtAuthGuard)
  toggleLike(
    @UserId() userId: string,
    @Args('ToggleReactionInputDto') params: ToggleReactionInputDto,
  ): Promise<ToggleReactionOutputDto> {
    return this.likeReactionService.toggle({ userId, ...params });
  }

  @Mutation(() => ToggleReactionOutputDto)
  @UseGuards(JwtAuthGuard)
  toggleDislike(
    @UserId() userId: string,
    @Args('ToggleReactionInputDto') params: ToggleReactionInputDto,
  ): Promise<ToggleReactionOutputDto> {
    return this.dislikeReactionService.toggle({ userId, ...params });
  }
}
