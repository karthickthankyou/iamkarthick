import { PartialType } from '@nestjs/swagger'
import { CreateEducation } from './create.dto'
import { Education } from '@prisma/client'

export class UpdateEducation extends PartialType(CreateEducation) {
  id: Education['id']
}
