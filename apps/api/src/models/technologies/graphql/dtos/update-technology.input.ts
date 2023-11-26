import { CreateTechnologyInput } from './create-technology.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Technology } from '@prisma/client'

@InputType()
export class UpdateTechnologyInput extends PartialType(CreateTechnologyInput) {
  id: Technology['id']
}
