import { Injectable, UnauthorizedException } from '@nestjs/common'
import { compare, genSalt, hash } from 'bcrypt'
import { WRONG_PASSWORD_ERROR } from '../auth.constants'

@Injectable()
export class PasswordService {
  async compare(password: string, validPassword: string) {
    const isCorectPasswort = await compare(password, validPassword)

    if (!isCorectPasswort) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR)
    }
  }

  async hash(password: string) {
    const salt = await genSalt(10)
    return await hash(password, salt)
  }
}
