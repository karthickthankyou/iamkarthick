import { ObjectType } from '@nestjs/graphql'
import { StrategyDetail as StrategyDetailType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class StrategyDetail
  implements RestrictProperties<StrategyDetail, StrategyDetailType>
{
  id: number
  strategyId: number
  title: string
  description: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
