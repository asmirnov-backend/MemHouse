import { CreateMemInput, Mem, UpdateMemInput } from '@api/graphql.schema';
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

  async updateMem(updateMemInput: UpdateMemInput): Promise<Mem> {
    return this.prisma.mem.update({
      where: { id: updateMemInput.id },
      data: {
        imgUrls: updateMemInput.imgUrls ?? undefined,
        text: updateMemInput.text,
        tags: updateMemInput.tags ?? undefined,
        likes: { increment: updateMemInput.increaseLikes ?? 0 },
        dislikes: { increment: updateMemInput.increaseDislikes ?? 0 },
      },
    });
  }
}
