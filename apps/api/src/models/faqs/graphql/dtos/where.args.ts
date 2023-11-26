import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class FaqWhereUniqueInput {
  id: number
}

@InputType()
export class FaqWhereInputStrict
  implements RestrictProperties<FaqWhereInputStrict, Prisma.FAQWhereInput>
{
  id: IntFilter
  question: StringFilter
  answer: StringFilter

  AND: FaqWhereInput[]
  OR: FaqWhereInput[]
  NOT: FaqWhereInput[]
}

@InputType()
export class FaqWhereInput extends PartialType(FaqWhereInputStrict) {}

@InputType()
export class FaqListRelationFilter {
  every?: FaqWhereInput
  some?: FaqWhereInput
  none?: FaqWhereInput
}

@InputType()
export class FaqRelationFilter {
  is?: FaqWhereInput
  isNot?: FaqWhereInput
}
