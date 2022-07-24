import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

import { JwtRegisteredModule } from '../auth/jwt/jwt-registered.module';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
