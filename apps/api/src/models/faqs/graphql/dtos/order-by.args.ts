import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class FaqOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      FaqOrderByWithRelationInputStrict,
      Prisma.FAQOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  question: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  answer: Prisma.SortOrder
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class FaqOrderByWithRelationInput extends PartialType(
  FaqOrderByWithRelationInputStrict,
) {}

@InputType()
export class FaqOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
