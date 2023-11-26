import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { StrategyDetailRelationFilter } from 'src/models/strategy-details/graphql/dtos/where.args'

@InputType()
export class ResourceWhereUniqueInput {
  id: number
}

@InputType()
export class ResourceWhereInputStrict
  implements
    RestrictProperties<ResourceWhereInputStrict, Prisma.ResourceWhereInput>
{
  id: IntFilter
  type: StringFilter
  title: StringFilter
  url: StringFilter
  strategyDetailId: IntFilter
  StrategyDetail: StrategyDetailRelationFilter

  AND: ResourceWhereInput[]
  OR: ResourceWhereInput[]
  NOT: ResourceWhereInput[]
}

@InputType()
export class ResourceWhereInput extends PartialType(ResourceWhereInputStrict) {}

@InputType()
export class ResourceListRelationFilter {
  every?: ResourceWhereInput
  some?: ResourceWhereInput
  none?: ResourceWhereInput
}

@InputType()
export class ResourceRelationFilter {
  is?: ResourceWhereInput
  isNot?: ResourceWhereInput
}
