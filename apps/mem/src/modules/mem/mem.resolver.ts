import { MemCreateInput } from './dto/input/memCreate.input';
import { GetMemsInput } from './dto/input/memsGetBest.input';
import { MemUpdateInput } from './dto/input/memUpdate.input';
import { MemMetadataService } from './mem.metadata.service';
import { MemService } from './mem.service';
import { MemModel } from './models/mem.model';
import { MemFullModel } from './models/memFull.model';

import { UserId } from '../../../../../libs/common/src/decorators/userId.decorator';
import { JwtAuthGuard } from '../../../../../libs/common/src/guards/jwtAuth.guard';
import { AddJwtToReqInterceptor } from '../../../../../libs/common/src/interceptors/addJwtToReq.interceptor';
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

@Resolver(() => MemFullModel)
export class MemResolver {
  constructor(
    private readonly memService: MemService,
    private readonly metadataService: MemMetadataService,
    private readonly likeReactionService: LikeReactionService,
    private readonly dislikeReactionService: DislikeReactionService,
  ) {}

  @Query(() => [MemFullModel])
  @UseInterceptors(AddJwtToReqInterceptor)
  mems(@Args('GetMemsInput') input: GetMemsInput): Promise<MemModel[]> {
    return this.memService.getMems(input);
  }

  @ResolveField('likes')
  async likes(
    @Parent() mem: MemModel,
  ): Promise<Pick<MemFullModel, 'likes'>['likes']> {
    return this.metadataService.getLikesAmount(mem.id);
  }

  @ResolveField('dislikes')
  async dislikes(
    @Parent() mem: MemModel,
  ): Promise<Pick<MemFullModel, 'dislikes'>['dislikes']> {
    return this.metadataService.getDislikesAmount(mem.id);
  }

  @ResolveField('rating', () => Float)
  async rating(
    @Parent() mem: MemModel,
  ): Promise<Pick<MemFullModel, 'rating'>['rating']> {
    return this.metadataService.getRatingAmount(mem.id);
  }

  @ResolveField('images')
  async images(
    @Parent() mem: MemModel,
  ): Promise<Pick<MemFullModel, 'images'>['images']> {
    return this.metadataService.getImages(mem.id);
  }

  @ResolveField('tags')
  async tags(
    @Parent() mem: MemModel,
  ): Promise<Pick<MemFullModel, 'tags'>['tags']> {
    return this.metadataService.getTags(mem.id);
  }

  @ResolveField('isCurrentUserHasSetLike')
  async isCurrentUserHasSetLike(
    @UserId() userId: string,
    @Parent() mem: MemModel,
  ): Promise<MemFullModel['isCurrentUserHasSetLike']> {
    if (isUndefined(userId)) return false;

    return this.likeReactionService.isUserHasSetReaction({
      memId: mem.id,
      userId,
    });
  }

  @ResolveField('isCurrentUserHasSetDislike')
  async isCurrentUserHasSetDislike(
    @UserId() userId: string,
    @Parent() mem: MemModel,
  ): Promise<MemFullModel['isCurrentUserHasSetDislike']> {
    if (isUndefined(userId)) return false;

    return this.dislikeReactionService.isUserHasSetReaction({
      memId: mem.id,
      userId,
    });
  }

  @Mutation(() => MemFullModel)
  @UseGuards(JwtAuthGuard)
  createMem(
    @Args('CreateMemInput') input: MemCreateInput,
    @UserId() userId: string,
  ): Promise<MemModel> {
    return this.memService.createMem({ ...input, userId });
  }

  @Mutation(() => MemFullModel)
  @UseGuards(JwtAuthGuard)
  updateMem(
    @Args('UpdateMemInput') input: MemUpdateInput,
    @UserId() userId: string,
  ): Promise<MemModel> {
    return this.memService.updateMem({ ...input, userId });
  }
}
