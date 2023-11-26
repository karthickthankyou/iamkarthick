import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EducationOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      EducationOrderByWithRelationInputStrict,
      Prisma.EducationOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  school: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  degree: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  start: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  end: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  details: Prisma.SortOrder
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class EducationOrderByWithRelationInput extends PartialType(
  EducationOrderByWithRelationInputStrict,
) {}

@InputType()
export class EducationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
