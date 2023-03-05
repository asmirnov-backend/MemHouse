import { MemCreateInput } from './dto/input/memCreate.input';
import { GetMemsInput } from './dto/input/memsGetBest.input';
import { MemUpdateInput } from './dto/input/memUpdate.input';
import { MemDto } from './dto/mem.model';
import { MemFullDto } from './dto/memFull.model';
import { MemMetadataService } from './mem.metadata.service';
import { MemService } from './mem.service';

import { JwtAuthGuard } from '../auth/jwt/jwtAuth.guard';
import { UserId } from '../auth/jwt/userId.decorator';
import { MemReactionService } from '../memReaction/memReaction.service';

import { UseGuards } from '@nestjs/common';
import {
  Args,
  Float,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { isUndefined } from 'lodash';

@Resolver(() => MemFullDto)
export class MemResolver {
  constructor(
    private readonly memService: MemService,
    private readonly metadataService: MemMetadataService,
    private readonly memReactionService: MemReactionService,
  ) {}

  @Query(() => [MemFullDto])
  @UseGuards(JwtAuthGuard)
  bestMems(
    @Args('GetMemsInput') params: GetMemsInput,
    @UserId() userId: string,
  ): Promise<MemDto[]> {
    return this.memService.getBestMems({ ...params, userId });
  }

  @Query(() => [MemFullDto])
  mems(@Args('GetMemsInput') params: GetMemsInput): Promise<MemDto[]> {
    return this.memService.getMems(params);
  }

  @ResolveField('likes')
  async likes(
    @Parent() mem: MemDto,
  ): Promise<Pick<MemFullDto, 'likes'>['likes']> {
    return this.metadataService.getLikesAmount(mem.id);
  }

  @ResolveField('dislikes')
  async dislikes(
    @Parent() mem: MemDto,
  ): Promise<Pick<MemFullDto, 'dislikes'>['dislikes']> {
    return this.metadataService.getDislikesAmount(mem.id);
  }

  @ResolveField('rating', () => Float)
  async rating(
    @Parent() mem: MemDto,
  ): Promise<Pick<MemFullDto, 'rating'>['rating']> {
    return this.metadataService.getRatingAmount(mem.id);
  }

  @ResolveField('images')
  async images(
    @Parent() mem: MemDto,
  ): Promise<Pick<MemFullDto, 'images'>['images']> {
    return this.metadataService.getImages(mem.id);
  }

  @ResolveField('tags')
  async tags(@Parent() mem: MemDto): Promise<Pick<MemFullDto, 'tags'>['tags']> {
    return this.metadataService.getTags(mem.id);
  }

  @ResolveField('isCurrentUserHasSetLike')
  async isCurrentUserHasSetLike(
    @UserId() userId: string,
    @Parent() mem: MemDto,
  ): Promise<MemFullDto['isCurrentUserHasSetLike']> {
    if (isUndefined(userId)) return false;

    return this.memReactionService.isUserHasSetLike({
      memId: mem.id,
      userId,
    });
  }

  @Mutation(() => MemFullDto)
  @UseGuards(JwtAuthGuard)
  createMem(
    @Args('CreateMemInput') params: MemCreateInput,
    @UserId() userId: string,
  ): Promise<MemDto> {
    return this.memService.createMem({ ...params, userId });
  }

  @Mutation(() => MemFullDto)
  @UseGuards(JwtAuthGuard)
  updateMem(
    @Args('UpdateMemInput') params: MemUpdateInput,
    @UserId() userId: string,
  ): Promise<MemDto> {
    return this.memService.updateMem({ ...params, userId });
  }
}
