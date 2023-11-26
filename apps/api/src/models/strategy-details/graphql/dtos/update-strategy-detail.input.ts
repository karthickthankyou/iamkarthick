import { CreateStrategyDetailInput } from './create-strategy-detail.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { StrategyDetail } from '@prisma/client'

@InputType()
export class UpdateStrategyDetailInput extends PartialType(
  CreateStrategyDetailInput,
) {
  id: StrategyDetail['id']
}
