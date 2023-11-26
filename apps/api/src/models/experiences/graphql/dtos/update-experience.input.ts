import { CreateExperienceInput } from './create-experience.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Experience } from '@prisma/client'

@InputType()
export class UpdateExperienceInput extends PartialType(CreateExperienceInput) {
  id: Experience['id']
}
