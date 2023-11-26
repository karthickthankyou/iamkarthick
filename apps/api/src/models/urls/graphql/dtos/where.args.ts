import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ProjectRelationFilter } from 'src/models/projects/graphql/dtos/where.args'

@InputType()
export class UrlWhereUniqueInput {
  id: number
}

@InputType()
export class UrlWhereInputStrict
  implements RestrictProperties<UrlWhereInputStrict, Prisma.UrlWhereInput>
{
  id: IntFilter
  title: StringFilter
  description: StringFilter
  url: StringFilter
  projectId: IntFilter
  Project: ProjectRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: UrlWhereInput[]
  OR: UrlWhereInput[]
  NOT: UrlWhereInput[]
}

@InputType()
export class UrlWhereInput extends PartialType(UrlWhereInputStrict) {}

@InputType()
export class UrlListRelationFilter {
  every?: UrlWhereInput
  some?: UrlWhereInput
  none?: UrlWhereInput
}

@InputType()
export class UrlRelationFilter {
  is?: UrlWhereInput
  isNot?: UrlWhereInput
}
