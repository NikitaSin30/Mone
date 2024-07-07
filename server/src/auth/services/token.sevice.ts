import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { genSalt, hash } from 'bcrypt'
import { Model } from 'mongoose'
import { env } from 'process'
import { User, UserDocument } from 'src/schemas/user.schema'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(User.name) private readonly user: Model<UserDocument>,
    private readonly jwtService: JwtService
  ) {}

  async create(email: string) {
    const payload = { email }

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: env.secret,
      expiresIn: '7d'
    })
    const accessToken = await this.jwtService.signAsync(payload)

    return { refreshToken, accessToken }
  }

  async hash(refreshToken: string) {
    const salt = await genSalt(10)
    return await hash(refreshToken, salt)
  }
}
