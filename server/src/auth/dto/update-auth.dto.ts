import { PartialType } from '@nestjs/mapped-types'
import { RegisterAuthDto } from './create-auth.dto'

export class UpdateAuthDto extends PartialType(RegisterAuthDto) {}
