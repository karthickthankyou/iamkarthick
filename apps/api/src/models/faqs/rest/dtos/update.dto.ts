import { PartialType } from '@nestjs/swagger'
import { CreateFaq } from './create.dto'
import { FAQ } from '@prisma/client'

export class UpdateFaq extends PartialType(CreateFaq) {
  id: FAQ['id']
}
