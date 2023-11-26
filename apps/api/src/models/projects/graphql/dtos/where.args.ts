import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { TechnologyListRelationFilter } from 'src/models/technologies/graphql/dtos/where.args'
import { UrlListRelationFilter } from 'src/models/urls/graphql/dtos/where.args'

@InputType()
export class ProjectWhereUniqueInput {
  id: number
}

@InputType()
export class EnumTagListFilter {
  @Field(() => [$Enums.Tag])
  equals?: $Enums.Tag[]
  @Field(() => $Enums.Tag)
  has?: $Enums.Tag
  @Field(() => [$Enums.Tag])
  hasEvery?: $Enums.Tag[]
  @Field(() => [$Enums.Tag])
  hasSome?: $Enums.Tag[]

  isEmpty?: boolean
}

@InputType()
export class ProjectWhereInputStrict
  implements
    RestrictProperties<ProjectWhereInputStrict, Prisma.ProjectWhereInput>
{
  Tags: EnumTagListFilter
  id: IntFilter
  createdAt: DateTimeFilter
  date: DateTimeFilter
  title: StringFilter
  description: StringFilter
  images: StringListFilter
  github: StringFilter
  linesOfCode: IntFilter

  Technologies: TechnologyListRelationFilter
  Urls: UrlListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ProjectWhereInput[]
  OR: ProjectWhereInput[]
  NOT: ProjectWhereInput[]
}

@InputType()
export class ProjectWhereInput extends PartialType(ProjectWhereInputStrict) {}

@InputType()
export class ProjectListRelationFilter {
  every?: ProjectWhereInput
  some?: ProjectWhereInput
  none?: ProjectWhereInput
}

@InputType()
export class ProjectRelationFilter {
  is?: ProjectWhereInput
  isNot?: ProjectWhereInput
}
