import { SiginRequestSchema } from 'contracts'
import { createZodDto } from 'nestjs-zod'

export class LoginAuthDto extends createZodDto(SiginRequestSchema) {}
