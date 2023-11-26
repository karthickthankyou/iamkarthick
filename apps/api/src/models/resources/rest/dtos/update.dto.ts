import { PartialType } from '@nestjs/swagger'
import { CreateResource } from './create.dto'
import { Resource } from '@prisma/client'

export class UpdateResource extends PartialType(CreateResource) {
  id: Resource['id']
}
