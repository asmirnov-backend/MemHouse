import { MemResolver } from './mem.resolver';

import { Test, TestingModule } from '@nestjs/testing';

describe('MemResolver', () => {
  let resolver: MemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemResolver],
    }).compile();

    resolver = module.get<MemResolver>(MemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
