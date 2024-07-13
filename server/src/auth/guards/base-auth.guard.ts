import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'
import { MISTAKE_WITH_AUTH_TOKEN } from '../auth.constants'

@Injectable()
export class BaseAuthGuard implements CanActivate {
  constructor(protected jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method was not implemented.')
  }

  protected verifyToken(accessToken: string) {
    try {
      this.jwtService.verify(accessToken)
    } catch (error) {
      throw new UnauthorizedException(MISTAKE_WITH_AUTH_TOKEN)
    }
  }
}
