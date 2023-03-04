import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtRegisteredModule } from './jwt/jwtRegistered.module';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
