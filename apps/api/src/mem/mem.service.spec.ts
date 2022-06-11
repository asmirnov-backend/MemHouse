import { MemService } from './mem.service';

import { Test, TestingModule } from '@nestjs/testing';

describe('MemService', () => {
  let service: MemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemService],
    }).compile();

    service = module.get<MemService>(MemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
