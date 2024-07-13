import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException
} from '@nestjs/common'
import { Request } from 'express'
import { Observable } from 'rxjs'
import { BaseAuthGuard } from './base-auth.guard'
import { MISTAKE_WITH_AUTH_TOKEN } from '../auth.constants'
import { UserService } from '../services/user.service'
import { JwtService } from '@nestjs/jwt'
import { log } from 'console'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from 'src/schemas/user.schema'
import { Model } from 'mongoose'

@Injectable()
export class RefreshGuard extends BaseAuthGuard {
  constructor(
    jwtService: JwtService,
    @InjectModel(User.name) private readonly user: Model<UserDocument>
  ) {
    super(jwtService)
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    const refreshToken = this.getRefreshTokenFromCookies(request)

    this.verifyToken(refreshToken)

    const { email } = this.decodeToken(refreshToken)

    await this.compareRefreshesToken(email, refreshToken)

    request['user'] = { email }

    return true
  }
  private getRefreshTokenFromCookies(request: Request) {
    const cookies = request.cookies
    const refreshToken = cookies?.refreshToken

    if (!refreshToken) {
      throw new UnauthorizedException(MISTAKE_WITH_AUTH_TOKEN)
    }

    return refreshToken
  }

  private decodeToken(refreshToken: string) {
    const decoded = this.jwtService.decode(refreshToken)
    if (!decoded || typeof decoded === 'string') {
      throw new UnauthorizedException(MISTAKE_WITH_AUTH_TOKEN)
    }
    return decoded
  }

  private async compareRefreshesToken(email: string, refreshToken: string) {
    const user = await this.user.findOne({ email })

    if (!user || user.refreshToken !== refreshToken) {
      throw new UnauthorizedException(MISTAKE_WITH_AUTH_TOKEN)
    }
  }
}
