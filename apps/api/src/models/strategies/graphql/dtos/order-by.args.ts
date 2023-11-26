import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { StrategyDetailOrderByRelationAggregateInput } from 'src/models/strategy-details/graphql/dtos/order-by.args'

@InputType()
export class StrategyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      StrategyOrderByWithRelationInputStrict,
      Prisma.StrategyOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  details: StrategyDetailOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class StrategyOrderByWithRelationInput extends PartialType(
  StrategyOrderByWithRelationInputStrict,
) {}

@InputType()
export class StrategyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
