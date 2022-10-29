import { StoreImgBBService } from './store.imgbb.service';

import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { readFile } from 'fs/promises';

describe('StoreImgBBService', () => {
  let service: StoreImgBBService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      providers: [StoreImgBBService],
    }).compile();

    service = module.get<StoreImgBBService>(StoreImgBBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save image', async () => {
    const file = {
      buffer: await readFile('./apps/api/src/store/mock/cat.jpeg'),
    } as Express.Multer.File;

    const result = await service.storeImage({ file });

    expect(result.meta).toBeDefined();
    expect(result.meta.time).toBeTruthy();
  });
});
