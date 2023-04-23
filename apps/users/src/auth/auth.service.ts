import { LoginInput } from './dto/input/login.input';
import { RegistrationInput } from './dto/input/registration.input';
import { JwtTokenModel } from './models/jwtToken.model';

import { JwtTokenBody } from '../../../../libs/interfaces/src/jwtToken.interface';
import { PrismaService } from '../prisma/prisma.service';

import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { isNull } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(params: LoginInput): Promise<JwtTokenModel> {
    const user = await this.prisma.user.findUnique({
      where: { email: params.email },
    });

    if (isNull(user)) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const isPasswordMatch = await compare(params.password, user.password);

    if (isPasswordMatch) {
      const jwtToken = await this.signJwtToken({ id: user.id });

      return { jwtToken };
    }

    throw new UnauthorizedException('Incorrect email or password');
  }

  async registration(params: RegistrationInput): Promise<JwtTokenModel> {
    const isUserExist = await this.isUserExist(params);

    if (isUserExist) {
      throw new ForbiddenException(
        'User with the same email or nickname already exist',
      );
    }

    const user = await this.prisma.user.create({
      data: {
        email: params.email,
        nickname: params.nickname,
        password: await hash(params.password, 10),
        name: params.name,
        surname: params.surname,
        birthday: params.birthday,
      },
    });

    const jwtToken = await this.signJwtToken({ id: user.id });

    return { jwtToken };
  }

  private async isUserExist(params: { email?: string; nickname?: string }) {
    const existingUserAmount = await this.prisma.user.count({
      where: { OR: [{ email: params.email }, { nickname: params.nickname }] },
    });

    return existingUserAmount !== 0;
  }

  private async signJwtToken(jwtTokenBody: Omit<JwtTokenBody, 'iat' | 'exp'>) {
    return this.jwtService.signAsync(jwtTokenBody);
  }
}
