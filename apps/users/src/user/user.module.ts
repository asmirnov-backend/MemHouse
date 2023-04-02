import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

import { JwtRegisteredModule } from '../../../../libs/common/src/modules/jwtRegistered.module';
import { PrismaModule } from '../prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
