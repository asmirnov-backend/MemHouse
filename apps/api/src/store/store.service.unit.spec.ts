import { StoreImgBBService } from './store.imgbb.service';

import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('StoreImgBBService', () => {
  let service: StoreImgBBService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      providers: [StoreImgBBService],
    }).compile();

    service = module.get<StoreImgBBService>(StoreImgBBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
