import { PartialType } from '@nestjs/swagger'
import { CreateStrategy } from './create.dto'
import { Strategy } from '@prisma/client'

export class UpdateStrategy extends PartialType(CreateStrategy) {
  id: Strategy['id']
}
