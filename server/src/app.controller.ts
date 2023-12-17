import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'

@Controller('wallet')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService
  ) {}

  @Get('/test')
  getHello(): string {
    this.prisma.user.findMany()
    return this.appService.getHello()
  }
}
