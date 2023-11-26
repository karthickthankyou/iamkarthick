import { Strategy } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class StrategyEntity
  implements RestrictProperties<StrategyEntity, Strategy>
{
  id: number
  title: string
  description: string
}
