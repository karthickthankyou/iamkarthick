import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ResourceListRelationFilter } from 'src/models/resources/graphql/dtos/where.args'
import { StrategyRelationFilter } from 'src/models/strategies/graphql/dtos/where.args'

@InputType()
export class StrategyDetailWhereUniqueInput {
  id: number
}

@InputType()
export class StrategyDetailWhereInputStrict
  implements
    RestrictProperties<
      StrategyDetailWhereInputStrict,
      Prisma.StrategyDetailWhereInput
    >
{
  id: IntFilter
  strategyId: IntFilter
  title: StringFilter
  description: StringFilter
  resources: ResourceListRelationFilter
  Strategy: StrategyRelationFilter

  AND: StrategyDetailWhereInput[]
  OR: StrategyDetailWhereInput[]
  NOT: StrategyDetailWhereInput[]
}

@InputType()
export class StrategyDetailWhereInput extends PartialType(
  StrategyDetailWhereInputStrict,
) {}

@InputType()
export class StrategyDetailListRelationFilter {
  every?: StrategyDetailWhereInput
  some?: StrategyDetailWhereInput
  none?: StrategyDetailWhereInput
}

@InputType()
export class StrategyDetailRelationFilter {
  is?: StrategyDetailWhereInput
  isNot?: StrategyDetailWhereInput
}
