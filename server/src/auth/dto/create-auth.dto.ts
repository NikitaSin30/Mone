import { SigupRequestSchema } from 'contracts'

import { createZodDto } from 'nestjs-zod'

export class RegisterAuthDto extends createZodDto(SigupRequestSchema) {}
