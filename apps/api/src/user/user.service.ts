import { CreateOneUserArgs } from './@genereted/args/create-one-user.args';
import { FindUniqueUserArgs } from './@genereted/args/find-unique-user.args';
import { User } from './@genereted/models/user.model';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(findUniqueUserArgs: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(findUniqueUserArgs);
  }

  async createUser(createOneUserArgs: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(createOneUserArgs);
  }
}
