import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { StrategyDetailOrderByWithRelationInput } from 'src/models/strategy-details/graphql/dtos/order-by.args'

@InputType()
export class ResourceOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ResourceOrderByWithRelationInputStrict,
      Prisma.ResourceOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  type: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  url: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  strategyDetailId: Prisma.SortOrder
  StrategyDetail: StrategyDetailOrderByWithRelationInput
}

@InputType()
export class ResourceOrderByWithRelationInput extends PartialType(
  ResourceOrderByWithRelationInputStrict,
) {}

@InputType()
export class ResourceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
