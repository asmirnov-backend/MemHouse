import { CreateOneMemArgs } from './@genereted/args/create-one-mem.args';
import { FindManyMemArgs } from './@genereted/args/find-many-mem.args';
import { UpdateOneMemArgs } from './@genereted/args/update-one-mem.args';
import { Mem } from './@genereted/models/mem.model';
import { MemService } from './mem.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver {
  constructor(private readonly memService: MemService) {}

  @Mutation(() => Mem)
  updateMem(@Args() updateOneMemArgs: UpdateOneMemArgs): Promise<Mem> {
    return this.memService.updateMem(updateOneMemArgs);
  }

  @Mutation(() => Mem)
  createMem(@Args() createOneMemArgs: CreateOneMemArgs): Promise<Mem> {
    return this.memService.createMem(createOneMemArgs);
  }

  @Query(() => [Mem])
  mems(@Args() findManyMemArgs: FindManyMemArgs): Promise<Mem[]> {
    return this.memService.getBestMems(findManyMemArgs);
  }
}
