import { CreateStrategyInput } from './create-strategy.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Strategy } from '@prisma/client'

@InputType()
export class UpdateStrategyInput extends PartialType(CreateStrategyInput) {
  id: Strategy['id']
}
