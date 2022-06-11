import { AppController } from './app.controller';
import { MemModule } from './mem/mem.module';
import { UserModule } from './user/user.module';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MemModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
