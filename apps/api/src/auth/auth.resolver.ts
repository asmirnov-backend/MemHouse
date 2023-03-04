import { AuthService } from './auth.service';
import { LoginInput } from './dto/input/login.input';
import { RegistrationInput } from './dto/input/registration.input';
import { JwtToken } from './dto/jwtToken.model';

import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => JwtToken)
  login(@Args('LoginInput') params: LoginInput): Promise<JwtToken> {
    return this.authService.login(params);
  }

  @Mutation(() => JwtToken)
  registration(
    @Args('RegistrationInput') params: RegistrationInput,
  ): Promise<JwtToken> {
    return this.authService.registration(params);
  }
}
