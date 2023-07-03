import { AuthService } from './auth.service';
import { LoginInput } from './dto/input/login.input';
import { RegistrationInput } from './dto/input/registration.input';
import { JwtTokenModel } from './models/jwtToken.model';

import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => JwtTokenModel)
  login(@Args('LoginInput') input: LoginInput): Promise<JwtTokenModel> {
    return this.authService.login(input);
  }

  @Mutation(() => JwtTokenModel)
  registration(
    @Args('RegistrationInput') input: RegistrationInput,
  ): Promise<JwtTokenModel> {
    return this.authService.registration(input);
  }
}
