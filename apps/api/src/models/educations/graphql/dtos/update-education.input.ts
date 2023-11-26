import { CreateEducationInput } from './create-education.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Education } from '@prisma/client'

@InputType()
export class UpdateEducationInput extends PartialType(CreateEducationInput) {
  id: Education['id']
}
