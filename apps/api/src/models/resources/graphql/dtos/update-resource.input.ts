import { CreateResourceInput } from './create-resource.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Resource } from '@prisma/client'

@InputType()
export class UpdateResourceInput extends PartialType(CreateResourceInput) {
  id: Resource['id']
}
