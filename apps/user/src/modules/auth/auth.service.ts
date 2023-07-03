import { LoginInput } from './dto/input/login.input';
import { RegistrationInput } from './dto/input/registration.input';
import { JwtTokenModel } from './models/jwtToken.model';

import { PrismaService } from '../../../../../libs/common/src/modules/prisma/prisma.service';
import { JwtTokenBody } from '../../../../../libs/interfaces/src/jwtToken.interface';

import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { isNull } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(input: LoginInput): Promise<JwtTokenModel> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (isNull(user)) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const isPasswordMatch = await compare(input.password, user.password);

    if (isPasswordMatch) {
      const jwtToken = await this.signJwtToken({ id: user.id });

      return { jwtToken };
    }

    throw new UnauthorizedException('Incorrect email or password');
  }

  async registration(input: RegistrationInput): Promise<JwtTokenModel> {
    const isUserExist = await this.isUserExist(input);

    if (isUserExist) {
      throw new ForbiddenException(
        'User with the same email or nickname already exist',
      );
    }

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        nickname: input.nickname,
        password: await hash(input.password, 10),
        name: input.name,
        surname: input.surname,
        birthday: input.birthday,
      },
    });

    const jwtToken = await this.signJwtToken({ id: user.id });

    return { jwtToken };
  }

  private async isUserExist(input: { email?: string; nickname?: string }) {
    const existingUserAmount = await this.prisma.user.count({
      where: { OR: [{ email: input.email }, { nickname: input.nickname }] },
    });

    return existingUserAmount !== 0;
  }

  private async signJwtToken(jwtTokenBody: Omit<JwtTokenBody, 'iat' | 'exp'>) {
    return this.jwtService.signAsync(jwtTokenBody);
  }
}
