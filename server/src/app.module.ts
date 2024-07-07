import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'

// Todo
//
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(
      'mongodb+srv://nikitasinfrontend:zxcvbnm123456@cluster0.b2ivocl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
