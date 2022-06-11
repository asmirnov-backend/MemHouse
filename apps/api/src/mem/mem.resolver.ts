import { IQuery, Mem } from '@api/graphql.interface';

import { Resolver } from '@nestjs/graphql';

@Resolver()
export class MemResolver implements Pick<IQuery, 'mems'> {
  mems(offset: number, limit: number): Mem[] | Promise<Mem[]> {
    throw new Error('Method not implemented.');
  }
}
