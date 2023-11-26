import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { TechnologyOrderByRelationAggregateInput } from 'src/models/technologies/graphql/dtos/order-by.args'
import { UrlOrderByRelationAggregateInput } from 'src/models/urls/graphql/dtos/order-by.args'

@InputType()
export class ProjectOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ProjectOrderByWithRelationInputStrict,
      Prisma.ProjectOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  date: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  images: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  github: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  linesOfCode: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  Tags: Prisma.SortOrder
  Technologies: TechnologyOrderByRelationAggregateInput
  Urls: UrlOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ProjectOrderByWithRelationInput extends PartialType(
  ProjectOrderByWithRelationInputStrict,
) {}

@InputType()
export class ProjectOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
