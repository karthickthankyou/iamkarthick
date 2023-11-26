import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ProjectOrderByWithRelationInput } from 'src/models/projects/graphql/dtos/order-by.args'

@InputType()
export class UrlOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UrlOrderByWithRelationInputStrict,
      Prisma.UrlOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  url: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  projectId: Prisma.SortOrder
  Project: ProjectOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class UrlOrderByWithRelationInput extends PartialType(
  UrlOrderByWithRelationInputStrict,
) {}

@InputType()
export class UrlOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
