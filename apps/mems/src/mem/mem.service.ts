import { MemCreateInput } from './dto/input/memCreate.input';
import { GetMemsInput } from './dto/input/memsGetBest.input';
import { MemUpdateInput } from './dto/input/memUpdate.input';
import { MemNotFoundException } from './exceptions/memNotFound.exception';
import { NotMemCreatorException } from './exceptions/notMemCreator.exception copy';
import { MemMetadataService } from './mem.metadata.service';
import { MemModel } from './models/mem.model';

import { PrismaService } from '../prisma/prisma.service';
import { StoreImgBBService } from '../store/store.imgbb.service';

import { Injectable } from '@nestjs/common';
import { isNull, map, omit } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly metadataService: MemMetadataService,
    private readonly storeService: StoreImgBBService,
  ) {}

  async getMems(params: GetMemsInput): Promise<MemModel[]> {
    return this.prisma.mem.findMany({
      take: params.take,
      skip: params.skip,
      orderBy: { rating: { amount: 'desc' } },
    });
  }

  async getAllMemsIds() {
    return this.prisma.mem.findMany({
      select: { id: true },
    });
  }

  async countAllMemsAmount(): Promise<number> {
    return this.prisma.mem.count();
  }

  async createMem(
    params: MemCreateInput & { userId: string },
  ): Promise<MemModel> {
    const images = await this.storeService.storeManyImages(
      params.imgsBuffers.map(imgBuffer => Buffer.from(imgBuffer)),
    );

    return this.prisma.mem.create({
      data: {
        images: {
          createMany: {
            data: images.map(i => omit(i.imageMeta, 'id')),
          },
        },
        text: params.text ?? null,
        tags: {
          connectOrCreate: params.tags?.map(tag => ({
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
  ): Promise<MemModel> {
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
          connectOrCreate: params.tags?.map(tag => ({
            create: { value: tag },
            where: { value: tag },
          })),
        },
      },
    });
  }
}
