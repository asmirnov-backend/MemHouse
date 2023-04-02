import { MemCreateInput } from './dto/input/memCreate.input';
import { GetMemsInput } from './dto/input/memsGetBest.input';
import { MemUpdateInput } from './dto/input/memUpdate.input';
import { MemMetadataService } from './mem.metadata.service';
import { MemService } from './mem.service';

import { UserId } from '../../../../libs/common/src/decorators/userId.decorator';
import { JwtAuthGuard } from '../../../../libs/common/src/guards/jwtAuth.guard';
import { AddJwtToReqInterceptor } from '../../../../libs/common/src/interceptors/addJwtToReq.interceptor';
import { MemDto } from '../../../../libs/models/src/mems/mem.model';
import { MemFullDto } from '../../../../libs/models/src/mems/memFull.model';
import { DislikeReactionService } from '../memReaction/dislikeReaction.service';
import { LikeReactionService } from '../memReaction/likeReaction.service';

import { UseGuards, UseInterceptors } from '@nestjs/common';
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
    private readonly likeReactionService: LikeReactionService,
    private readonly dislikeReactionService: DislikeReactionService,
  ) {}

  @Query(() => [MemFullDto])
  @UseInterceptors(AddJwtToReqInterceptor)
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

    return this.likeReactionService.isUserHasSetReaction({
      memId: mem.id,
      userId,
    });
  }

  @ResolveField('isCurrentUserHasSetDislike')
  async isCurrentUserHasSetDislike(
    @UserId() userId: string,
    @Parent() mem: MemDto,
  ): Promise<MemFullDto['isCurrentUserHasSetDislike']> {
    if (isUndefined(userId)) return false;

    return this.dislikeReactionService.isUserHasSetReaction({
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
