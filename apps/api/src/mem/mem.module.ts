import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';

import { Module } from '@nestjs/common';

@Module({
  providers: [MemService, MemResolver],
})
export class MemModule {}
