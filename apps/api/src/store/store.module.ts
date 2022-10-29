import { StoreImgBBService } from './store.imgbb.service';

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  providers: [StoreImgBBService],
  exports: [StoreImgBBService],
})
export class StoreModule {}
