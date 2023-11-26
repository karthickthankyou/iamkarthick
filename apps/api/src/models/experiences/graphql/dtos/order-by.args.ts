import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ExperienceOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ExperienceOrderByWithRelationInputStrict,
      Prisma.ExperienceOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  company: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  start: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  end: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  details: Prisma.SortOrder
}

@InputType()
export class ExperienceOrderByWithRelationInput extends PartialType(
  ExperienceOrderByWithRelationInputStrict,
) {}

@InputType()
export class ExperienceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
