import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
