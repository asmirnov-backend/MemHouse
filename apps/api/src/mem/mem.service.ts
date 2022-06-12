import { CreateMemInput, Mem } from '@api/graphql.interface';
import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MemService {
  constructor(private readonly prisma: PrismaService) {}

  async getBestMems(pagination: {
    offset: number;
    limit: number;
  }): Promise<Mem[]> {
    return this.prisma.mem.findMany({
      take: pagination.limit,
      skip: pagination.offset,
    });
  }

  async createMem(data: CreateMemInput): Promise<Mem> {
    return this.prisma.mem.create({
      data: { imgUrls: data.imgUrls, text: data.text, rating: 1.0 },
    });
  }
}
