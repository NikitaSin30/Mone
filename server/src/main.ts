import * as cookieParser from 'cookie-parser'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppExceptionFilter } from './filters/AppExceptionFilter'
import { AuthGuard } from './auth/guards/auth-guard'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const PORT = process.env.PORT || 5432
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true
  })
  app.use(cookieParser())
  app.useGlobalGuards(new AuthGuard())
  app.useGlobalPipes(new ZodValidationPipe())
  app.useGlobalFilters(new AppExceptionFilter())
  console.log('listen', PORT)
  await app.listen(PORT)
}

bootstrap()
