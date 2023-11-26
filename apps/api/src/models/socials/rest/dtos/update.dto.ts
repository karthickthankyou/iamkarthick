import { PartialType } from '@nestjs/swagger'
import { CreateSocial } from './create.dto'
import { Social } from '@prisma/client'

export class UpdateSocial extends PartialType(CreateSocial) {
  id: Social['id']
}
