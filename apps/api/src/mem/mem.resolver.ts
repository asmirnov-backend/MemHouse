import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { MemsGetBestInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';
import { MemService } from './mem.service';

import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserId } from '../auth/jwt/user-id.decorator';

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver {
  constructor(private readonly memService: MemService) {}

  @Mutation(() => Mem)
  @UseGuards(JwtAuthGuard)
  updateMem(
    @Args('UpdateMemInput') params: MemUpdateInput,
    @UserId() userId: string,
  ): Promise<Mem> {
    return this.memService.updateMem({ ...params, userId });
  }

  @Mutation(() => Mem)
  @UseGuards(JwtAuthGuard)
  createMem(
    @Args('CreateMemInput') params: MemCreateInput,
    @UserId() userId: string,
  ): Promise<Mem> {
    return this.memService.createMem({ ...params, userId });
  }

  @Query(() => [Mem])
  @UseGuards(JwtAuthGuard)
  bestMems(
    @Args('GetBestMemsInput') params: MemsGetBestInput,
    @UserId() userId: string,
  ): Promise<Mem[]> {
    return this.memService.getBestMems({ ...params, userId });
  }
}
