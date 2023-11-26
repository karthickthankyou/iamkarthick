import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class ExperienceWhereUniqueInput {
  id: number
}

@InputType()
export class ExperienceWhereInputStrict
  implements
    RestrictProperties<ExperienceWhereInputStrict, Prisma.ExperienceWhereInput>
{
  id: IntFilter
  title: StringFilter
  company: StringFilter
  start: DateTimeFilter
  end: DateTimeFilter
  details: StringListFilter

  AND: ExperienceWhereInput[]
  OR: ExperienceWhereInput[]
  NOT: ExperienceWhereInput[]
}

@InputType()
export class ExperienceWhereInput extends PartialType(
  ExperienceWhereInputStrict,
) {}

@InputType()
export class ExperienceListRelationFilter {
  every?: ExperienceWhereInput
  some?: ExperienceWhereInput
  none?: ExperienceWhereInput
}

@InputType()
export class ExperienceRelationFilter {
  is?: ExperienceWhereInput
  isNot?: ExperienceWhereInput
}
