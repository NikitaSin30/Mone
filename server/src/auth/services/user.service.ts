import {
  BadRequestException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from 'src/schemas/user.schema'
import {
  ALREADY_REGISTERED_ERROR,
  USER_NOT_FOUND_ERROR
} from '../auth.constants'
import { PasswordService } from './password.service'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly user: Model<UserDocument>,
    private readonly passwordService: PasswordService
  ) {}
  async create(email: string, password: string) {
    await this.checkUniqueEmail(email)

    const hashedPassword = await this.passwordService.hash(password)

    const user = new this.user({
      email: email,
      password: hashedPassword
    })

    await user.save()
  }
  async saveRefreshTokenInDB(email: string, hashedRefreshToken: string) {
    await this.user.updateOne(
      { email: email },
      { $set: { refreshToken: hashedRefreshToken } }
    )
  }

  async logout(email: string) {
    await this.user.updateOne({ email: email }, { $set: { refreshToken: '' } })
  }

  async findUser(email: string) {
    const user = await this.user.findOne({ email }).exec()

    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR)
    }
    return user
  }

  async validateLoginData(email: string, password: string) {
    const user = await this.findUser(email)
    await this.passwordService.compare(password, user.password)
  }

  async checkUniqueEmail(email: string) {
    const registeredUser = await this.findUser(email)
    if (registeredUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR)
    }
  }
}
