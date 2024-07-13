import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/schemas/user.schema'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { env } from 'process'
import { TokenService } from './services/token.sevice'
import { PasswordService } from './services/password.service'
import { UserService } from './services/user.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, TokenService, PasswordService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    ConfigModule
  ]
})
export class AuthModule {}
