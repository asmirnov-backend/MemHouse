import { MemService } from './mem.service';

import {
  IQuery,
  IMutation,
  UpdateMemInput,
  CreateMemInput,
  PaginationInput,
  Mem,
} from '@api/graphql.schema';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver
  implements
    Pick<IQuery, 'mems'>,
    Pick<IMutation, 'createMem'>,
    Pick<IMutation, 'updateMem'>
{
  constructor(private readonly memService: MemService) {}

  @Mutation()
  updateMem(
    @Args('updateMemInput') updateMemInput: UpdateMemInput,
  ): Mem | Promise<Mem> {
    return this.memService.updateMem(updateMemInput);
  }

  @Mutation()
  createMem(
    @Args('createMemInput') createMemInput: CreateMemInput,
  ): Mem | Promise<Mem> {
    return this.memService.createMem(createMemInput);
  }

  @Query()
  mems(@Args('pagination') pagination: PaginationInput): Promise<Mem[]> {
    return this.memService.getBestMems(pagination);
  }
}
