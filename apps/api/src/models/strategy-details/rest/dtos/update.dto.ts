import { PartialType } from '@nestjs/swagger'
import { CreateStrategyDetail } from './create.dto'
import { StrategyDetail } from '@prisma/client'

export class UpdateStrategyDetail extends PartialType(CreateStrategyDetail) {
  id: StrategyDetail['id']
}
