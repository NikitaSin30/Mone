import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { genSalt, hash } from 'bcrypt'

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async create(email: string) {
    const payload = { email }

    const [refreshToken, accessToken] = await Promise.all([
      this.jwtService.signAsync(payload, { expiresIn: '7d' }),
      this.jwtService.signAsync(payload, { expiresIn: '1h' })
    ])

    return { refreshToken, accessToken }
  }

  async hash(refreshToken: string) {
    const salt = await genSalt(10)
    return await hash(refreshToken, salt)
  }
}
