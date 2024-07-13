import { Injectable } from '@nestjs/common'
import { RegisterAuthDto } from './dto/create-auth.dto'
import { LoginAuthDto } from './dto'
import { TokenService } from './services/token.sevice'
import { UserService } from './services/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async sigup({ password, email }: RegisterAuthDto): Promise<void> {
    console.log(12)

    await this.userService.create(email, password)
  }

  async login(
    loginAuthDto: LoginAuthDto
  ): Promise<{ accessToken: string; refreshToken: string }> {
    await this.userService.validateLoginData(
      loginAuthDto.email,
      loginAuthDto.password
    )
    const { accessToken, refreshToken } = await this.tokenService.create(
      loginAuthDto.email
    )

    await this.userService.saveRefreshTokenInDB(
      loginAuthDto.email,
      refreshToken
    )

    return {
      accessToken,
      refreshToken
    }
  }

  async logout(email: string) {
    await this.userService.logout(email)
  }

  async refreshTokens(email: string) {
    const { accessToken, refreshToken } = await this.tokenService.create(email)

    await this.userService.saveRefreshTokenInDB(email, refreshToken)

    return {
      accessToken,
      refreshToken
    }
  }
}
