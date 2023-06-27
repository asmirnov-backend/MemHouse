import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

import { JwtRegisteredModule } from '../../../../libs/common/src/modules/jwtRegistered/jwtRegistered.module';
import { PrismaModule } from '../prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
