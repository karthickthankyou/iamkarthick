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
export class EducationWhereUniqueInput {
  id: number
}

@InputType()
export class EducationWhereInputStrict
  implements
    RestrictProperties<EducationWhereInputStrict, Prisma.EducationWhereInput>
{
  id: IntFilter
  school: StringFilter
  degree: StringFilter
  start: DateTimeFilter
  end: DateTimeFilter
  details: StringListFilter

  AND: EducationWhereInput[]
  OR: EducationWhereInput[]
  NOT: EducationWhereInput[]
}

@InputType()
export class EducationWhereInput extends PartialType(
  EducationWhereInputStrict,
) {}

@InputType()
export class EducationListRelationFilter {
  every?: EducationWhereInput
  some?: EducationWhereInput
  none?: EducationWhereInput
}

@InputType()
export class EducationRelationFilter {
  is?: EducationWhereInput
  isNot?: EducationWhereInput
}
