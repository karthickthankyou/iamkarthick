import { CreateFaqInput } from './create-faq.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { FAQ } from '@prisma/client'

@InputType()
export class UpdateFaqInput extends PartialType(CreateFaqInput) {
  id: FAQ['id']
}
