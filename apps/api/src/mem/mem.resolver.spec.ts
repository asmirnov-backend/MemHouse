import { MemModule } from './mem.module';
import { MemResolver } from './mem.resolver';

import { Test, TestingModule } from '@nestjs/testing';

describe('MemResolver', () => {
  let resolver: MemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MemModule],
    }).compile();

    resolver = module.get<MemResolver>(MemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
