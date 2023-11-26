import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProjectOrderByRelationAggregateInput } from 'src/models/projects/graphql/dtos/order-by.args'

@InputType()
export class TechnologyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      TechnologyOrderByWithRelationInputStrict,
      Prisma.TechnologyOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  Projects: ProjectOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class TechnologyOrderByWithRelationInput extends PartialType(
  TechnologyOrderByWithRelationInputStrict,
) {}

@InputType()
export class TechnologyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
