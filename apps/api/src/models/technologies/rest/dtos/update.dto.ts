import { PartialType } from '@nestjs/swagger'
import { CreateTechnology } from './create.dto'
import { Technology } from '@prisma/client'

export class UpdateTechnology extends PartialType(CreateTechnology) {
  id: Technology['id']
}
