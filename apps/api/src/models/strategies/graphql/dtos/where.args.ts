import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { StrategyDetailListRelationFilter } from 'src/models/strategy-details/graphql/dtos/where.args'

@InputType()
export class StrategyWhereUniqueInput {
  id: number
}

@InputType()
export class StrategyWhereInputStrict
  implements
    RestrictProperties<StrategyWhereInputStrict, Prisma.StrategyWhereInput>
{
  id: IntFilter
  title: StringFilter
  description: StringFilter
  details: StrategyDetailListRelationFilter

  AND: StrategyWhereInput[]
  OR: StrategyWhereInput[]
  NOT: StrategyWhereInput[]
}

@InputType()
export class StrategyWhereInput extends PartialType(StrategyWhereInputStrict) {}

@InputType()
export class StrategyListRelationFilter {
  every?: StrategyWhereInput
  some?: StrategyWhereInput
  none?: StrategyWhereInput
}

@InputType()
export class StrategyRelationFilter {
  is?: StrategyWhereInput
  isNot?: StrategyWhereInput
}
