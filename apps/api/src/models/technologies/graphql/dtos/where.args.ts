import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ProjectListRelationFilter } from 'src/models/projects/graphql/dtos/where.args'

@InputType()
export class TechnologyWhereUniqueInput {
  id: number
}

@InputType()
export class TechnologyWhereInputStrict
  implements
    RestrictProperties<TechnologyWhereInputStrict, Prisma.TechnologyWhereInput>
{
  id: IntFilter
  name: StringFilter
  description: StringFilter
  Projects: ProjectListRelationFilter

  AND: TechnologyWhereInput[]
  OR: TechnologyWhereInput[]
  NOT: TechnologyWhereInput[]
}

@InputType()
export class TechnologyWhereInput extends PartialType(
  TechnologyWhereInputStrict,
) {}

@InputType()
export class TechnologyListRelationFilter {
  every?: TechnologyWhereInput
  some?: TechnologyWhereInput
  none?: TechnologyWhereInput
}

@InputType()
export class TechnologyRelationFilter {
  is?: TechnologyWhereInput
  isNot?: TechnologyWhereInput
}
