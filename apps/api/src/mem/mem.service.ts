import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { GetMemsInput } from './dto/input/mems-get-best.input';
import { MemDto } from './dto/mem.model';
import { MemNotFoundException } from './exceptions/mem-not-found.exception';
import { NotMemCreatorException } from './exceptions/not-mem-creator.exception copy';
import { MemMetadataService } from './mem.metadata.service';
import { RatingCountService } from './rating/rating-count.service';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { isNull } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly metadataService: MemMetadataService,
    private readonly ratingCountService: RatingCountService,
  ) {}

  async getBestMems(
    params: GetMemsInput & { userId: string },
  ): Promise<MemDto[]> {
    const mems = await this.prisma.mem.findMany({
      take: params.take,
      skip: params.skip,
      where: { NOT: [{ viewedUsers: { some: { id: params.userId } } }] },
      orderBy: { rating: { amount: 'desc' } },
    });

    await Promise.all(
      mems.map((mem) =>
        this.prisma.mem.update({
          where: { id: mem.id },
          data: { viewedUsers: { connect: { id: params.userId } } },
        }),
      ),
    );

    return mems;
  }

  async getMems(params: GetMemsInput): Promise<MemDto[]> {
    return this.prisma.mem.findMany({
      take: params.take,
      skip: params.skip,
      orderBy: { rating: { amount: 'desc' } },
    });
  }

  async createMem(
    params: MemCreateInput & { userId: string },
  ): Promise<MemDto> {
    return this.prisma.mem.create({
      data: {
        images: {
          createMany: {
            data: params.imgUrls.map((imgUrl) => ({ displayUrl: imgUrl })),
          },
        },
        text: params.text ?? null,
        tags: {
          connectOrCreate: params.tags?.map((tag) => ({
            create: { value: tag },
            where: { value: tag },
          })),
        },
        createdUser: { connect: { id: params.userId } },
        rating: { create: { amount: this.ratingCountService.calculate() } },
      },
    });
  }

  async updateMem(
    params: MemUpdateInput & { userId: string },
  ): Promise<MemDto> {
    const mem = await this.prisma.mem.findUnique({
      where: { id: params.id },
    });

    if (isNull(mem)) {
      throw new MemNotFoundException(params.id);
    }

    if (mem.createdUserId !== params.userId) {
      throw new NotMemCreatorException();
    }

    return this.prisma.mem.update({
      where: { id: params.id },
      data: {
        images: {
          connectOrCreate: params.imgUrls?.map((imgUrl) => ({
            where: { displayUrl: imgUrl },
            create: { displayUrl: imgUrl },
          })),
        },
        text: params.text,
        tags: {
          connectOrCreate: params.tags?.map((tag) => ({
            create: { value: tag },
            where: { value: tag },
          })),
        },
      },
    });
  }
}
