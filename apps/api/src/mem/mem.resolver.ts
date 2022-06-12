import { MemService } from './mem.service';

import {
  CreateMemInput,
  IMutation,
  IQuery,
  Mem,
  PaginationInput,
} from '@api/graphql.interface';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver
  implements Pick<IQuery, 'mems'>, Pick<IMutation, 'createMem'>
{
  constructor(private readonly memService: MemService) {}

  @Mutation()
  createMem(
    @Args('createMemInput') createMemInput: CreateMemInput,
  ): Mem | Promise<Mem> {
    return this.memService.createMem(createMemInput);
  }

  @Query()
  mems(
    @Args('pagination') pagination: PaginationInput,
  ): Mem[] | Promise<Mem[]> {
    return this.memService.getBestMems(pagination);
  }
}
