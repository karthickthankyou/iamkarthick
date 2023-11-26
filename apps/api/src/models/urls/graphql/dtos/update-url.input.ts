import { CreateUrlInput } from './create-url.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Url } from '@prisma/client'

@InputType()
export class UpdateUrlInput extends PartialType(CreateUrlInput) {
  id: Url['id']
}
