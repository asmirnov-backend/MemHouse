import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { GetMemsInput } from './dto/input/mems-get-best.input';
import { MemFull } from './dto/mem-full.model';
import { Mem } from './dto/mem.model';
import { MemMetadataService } from './mem.metadata.service';
import { MemService } from './mem.service';

import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserId } from '../auth/jwt/user-id.decorator';

import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => MemFull)
export class MemResolver {
  constructor(
    private readonly memService: MemService,
    private readonly metadataService: MemMetadataService,
  ) {}

  @Mutation(() => MemFull)
  @UseGuards(JwtAuthGuard)
  updateMem(
    @Args('UpdateMemInput') params: MemUpdateInput,
    @UserId() userId: string,
  ): Promise<Mem> {
    return this.memService.updateMem({ ...params, userId });
  }

  @Mutation(() => MemFull)
  @UseGuards(JwtAuthGuard)
  createMem(
    @Args('CreateMemInput') params: MemCreateInput,
    @UserId() userId: string,
  ): Promise<Mem> {
    return this.memService.createMem({ ...params, userId });
  }

  @Query(() => [MemFull])
  @UseGuards(JwtAuthGuard)
  bestMems(
    @Args('GetMemsInput') params: GetMemsInput,
    @UserId() userId: string,
  ): Promise<Mem[]> {
    return this.memService.getBestMems({ ...params, userId });
  }

  @Query(() => [MemFull])
  mems(@Args('GetMemsInput') params: GetMemsInput): Promise<Mem[]> {
    return this.memService.getMems(params);
  }

  @ResolveField('likes')
  async likes(@Parent() mem: MemFull) {
    return this.metadataService.getLikesAmount(mem.id);
  }

  @ResolveField('dislikes')
  async dislikes(@Parent() mem: MemFull) {
    return this.metadataService.getDislikesAmount(mem.id);
  }

  @ResolveField('rating')
  async rating(@Parent() mem: MemFull) {
    return this.metadataService.getRatingAmount(mem.id);
  }
}
