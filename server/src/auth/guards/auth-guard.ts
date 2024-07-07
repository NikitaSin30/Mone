import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'

// Guard который будет проверять аксес токен
// Подумать над
// - исключить проверку на роуты логин, регистрация и страница гостевая
// - Guard на рефреш
// - еще раз подумать почему Guard а не Midleware
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context)

    return true
  }
}
