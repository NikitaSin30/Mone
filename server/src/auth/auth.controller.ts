import { Controller, Post, Body, Res, Req } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterAuthDto } from './dto/create-auth.dto'
import { LoginAuthDto } from './dto/login-auth.dto'
import { SiginResponse, SigupResponse } from 'contracts'
import { Request, Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sigup')
  async sigup(@Body() sigupDto: RegisterAuthDto): Promise<SigupResponse> {
    await this.authService.sigup(sigupDto)
    return {
      statusCode: 201,
      message: 'Регистрация прошла успешно',
      endpoint: 'auth/sigin',
      data: {}
    }
  }

  @Post('/signin')
  async sigin(
    @Body() signDto: LoginAuthDto,
    @Res({ passthrough: true }) res: Response
  ): Promise<SiginResponse> {
    const { accessToken, refreshToken } = await this.authService.sigin(signDto)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return {
      statusCode: 201,
      message: 'Вход успешно выполнен',
      endpoint: 'auth/sigin',
      data: {
        accessToken
      }
    }
  }

  @Post('/logout')
  async logout(@Req() req: Request) {
    const { email } = req.user as { email: string }
    return await this.authService.logout(email)
  }

  @Post('/refresh')
  async refreshTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { email } = req.user as { email: string }

    const { accessToken, refreshToken } = await this.authService.refreshTokens(
      email
    )

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return {
      accessToken
    }
  }
}
