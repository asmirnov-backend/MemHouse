import { CreateOneMemArgs } from './@genereted/args/create-one-mem.args';
import { FindManyMemArgs } from './@genereted/args/find-many-mem.args';
import { UpdateOneMemArgs } from './@genereted/args/update-one-mem.args';
import { Mem } from './@genereted/models/mem.model';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MemService {
  constructor(private readonly prisma: PrismaService) {}

  async getBestMems(findManyMemArgs: FindManyMemArgs): Promise<Mem[]> {
    return this.prisma.mem.findMany(findManyMemArgs);
  }

  async createMem(createOneMemArgs: CreateOneMemArgs): Promise<Mem> {
    createOneMemArgs.data.rating = 1.0;

    return this.prisma.mem.create(createOneMemArgs);
  }

  async updateMem(updateOneMemArgs: UpdateOneMemArgs): Promise<Mem> {
    return this.prisma.mem.update(updateOneMemArgs);
  }
}
