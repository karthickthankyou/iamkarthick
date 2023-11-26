import { PartialType } from '@nestjs/swagger'
import { CreateExperience } from './create.dto'
import { Experience } from '@prisma/client'

export class UpdateExperience extends PartialType(CreateExperience) {
  id: Experience['id']
}
