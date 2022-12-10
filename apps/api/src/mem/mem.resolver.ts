import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { GetMemsInput } from './dto/input/mems-get-best.input';
import { MemFullDto } from './dto/mem-full.model';
import { MemDto } from './dto/mem.model';
import { MemMetadataService } from './mem.metadata.service';
import { MemService } from './mem.service';

import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserId } from '../auth/jwt/user-id.decorator';

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

@Resolver(() => MemFullDto)
export class MemResolver {
  constructor(
    private readonly memService: MemService,
    private readonly metadataService: MemMetadataService,
  ) {}

  @Mutation(() => MemFullDto)
  @UseGuards(JwtAuthGuard)
  updateMem(
    @Args('UpdateMemInput') params: MemUpdateInput,
    @UserId() userId: string,
  ): Promise<MemDto> {
    return this.memService.updateMem({ ...params, userId });
  }

  @Mutation(() => MemFullDto)
  @UseGuards(JwtAuthGuard)
  createMem(
    @Args('CreateMemInput') params: MemCreateInput,
    @UserId() userId: string,
  ): Promise<MemDto> {
    return this.memService.createMem({ ...params, userId });
  }

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
}
