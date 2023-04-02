import { AuthService } from './auth.service';
import { LoginInput } from './dto/input/login.input';
import { RegistrationInput } from './dto/input/registration.input';
import { JwtTokenModel } from './models/jwtToken.model';

import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => JwtTokenModel)
  login(@Args('LoginInput') params: LoginInput): Promise<JwtTokenModel> {
    return this.authService.login(params);
  }

  @Mutation(() => JwtTokenModel)
  registration(
    @Args('RegistrationInput') params: RegistrationInput,
  ): Promise<JwtTokenModel> {
    return this.authService.registration(params);
  }
}
