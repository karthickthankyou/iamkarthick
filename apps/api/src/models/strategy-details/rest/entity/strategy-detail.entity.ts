import { StrategyDetail } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class StrategyDetailEntity
  implements RestrictProperties<StrategyDetailEntity, StrategyDetail>
{
  id: number
  strategyId: number
  title: string
  description: string
}
