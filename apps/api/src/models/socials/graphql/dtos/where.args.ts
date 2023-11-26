import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class SocialWhereUniqueInput {
  id: number
}

@InputType()
export class SocialWhereInputStrict
  implements
    RestrictProperties<SocialWhereInputStrict, Prisma.SocialWhereInput>
{
  id: IntFilter
  title: StringFilter
  description: StringFilter
  url: StringFilter

  AND: SocialWhereInput[]
  OR: SocialWhereInput[]
  NOT: SocialWhereInput[]
}

@InputType()
export class SocialWhereInput extends PartialType(SocialWhereInputStrict) {}

@InputType()
export class SocialListRelationFilter {
  every?: SocialWhereInput
  some?: SocialWhereInput
  none?: SocialWhereInput
}

@InputType()
export class SocialRelationFilter {
  is?: SocialWhereInput
  isNot?: SocialWhereInput
}
