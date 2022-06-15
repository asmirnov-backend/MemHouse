import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { MemsGetBestInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';
import { MemService } from './mem.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver {
  constructor(private readonly memService: MemService) {}

  @Mutation(() => Mem)
  updateMem(@Args('UpdateMemInput') params: MemUpdateInput): Promise<Mem> {
    return this.memService.updateMem(params);
  }

  @Mutation(() => Mem)
  createMem(@Args('CreateMemInput') params: MemCreateInput): Promise<Mem> {
    return this.memService.createMem(params);
  }

  @Query(() => [Mem])
  bestMems(@Args('GetBestMemsInput') params: MemsGetBestInput): Promise<Mem[]> {
    return this.memService.getBestMems(params);
  }
}
