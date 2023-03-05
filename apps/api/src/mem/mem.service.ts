import { MemCreateInput } from './dto/input/memCreate.input';
import { GetMemsInput } from './dto/input/memsGetBest.input';
import { MemUpdateInput } from './dto/input/memUpdate.input';
import { MemDto } from './dto/mem.model';
import { MemNotFoundException } from './exceptions/memNotFound.exception';
import { NotMemCreatorException } from './exceptions/notMemCreator.exception copy';
import { MemMetadataService } from './mem.metadata.service';

import { StoreImgBBService } from '../store/store.imgbb.service';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { isNull, omit } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly metadataService: MemMetadataService,
    private readonly storeService: StoreImgBBService,
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
    const images = await this.storeService.storeManyImages(
      params.imgsBuffers.map((imgBuffer) => Buffer.from(imgBuffer)),
    );

    return this.prisma.mem.create({
      data: {
        images: {
          createMany: {
            data: images.map((i) => omit(i.imageMeta, 'id')),
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
        rating: { create: { amount: 0 } },
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
