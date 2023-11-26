import { PartialType } from '@nestjs/swagger'
import { CreateUrl } from './create.dto'
import { Url } from '@prisma/client'

export class UpdateUrl extends PartialType(CreateUrl) {
  id: Url['id']
}
