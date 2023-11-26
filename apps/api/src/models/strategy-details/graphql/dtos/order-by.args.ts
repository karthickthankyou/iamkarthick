import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ResourceOrderByRelationAggregateInput } from 'src/models/resources/graphql/dtos/order-by.args'
import { StrategyOrderByWithRelationInput } from 'src/models/strategies/graphql/dtos/order-by.args'

@InputType()
export class StrategyDetailOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      StrategyDetailOrderByWithRelationInputStrict,
      Prisma.StrategyDetailOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  strategyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  resources: ResourceOrderByRelationAggregateInput
  Strategy: StrategyOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class StrategyDetailOrderByWithRelationInput extends PartialType(
  StrategyDetailOrderByWithRelationInputStrict,
) {}

@InputType()
export class StrategyDetailOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
