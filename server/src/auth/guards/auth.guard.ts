import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { Observable } from 'rxjs'
import { MISTAKE_WITH_AUTH_TOKEN } from '../auth.constants'
import { BaseAuthGuard } from './base-auth.guard'

// Guard который будет проверять аксес токен
// Подумать над
// - исключить проверку на роуты логин, регистрация и страница гостевая
// - Guard на рефреш
// - еще раз подумать почему Guard а не Midleware

@Injectable()
export class AuthGuard extends BaseAuthGuard {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()

    if (
      ['/auth/signup', '/auth/login', '/auth/refresh'].includes(
        request.originalUrl
      )
    ) {
      return true
    }

    const accessToken = this.getAccessTokenFromHeader(request)

    this.verifyToken(accessToken)

    return true
  }

  private getAccessTokenFromHeader(request: Request): string {
    const token = request.headers.authorization?.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException(MISTAKE_WITH_AUTH_TOKEN)
    }

    return token
  }
}
