import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ProjectOrderByWithRelationInput } from './order-by.args'
import { ProjectWhereInput, ProjectWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ProjectScalarFieldEnum, {
  name: 'ProjectScalarFieldEnum',
})

@ArgsType()
class FindManyProjectArgsStrict
  implements
    RestrictProperties<
      FindManyProjectArgsStrict,
      Omit<Prisma.ProjectFindManyArgs, 'include' | 'select'>
    >
{
  where: ProjectWhereInput
  orderBy: ProjectOrderByWithRelationInput[]
  cursor: ProjectWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ProjectScalarFieldEnum])
  distinct: Prisma.ProjectScalarFieldEnum[]
}

@ArgsType()
export class FindManyProjectArgs extends PartialType(
  FindManyProjectArgsStrict,
) {}

@ArgsType()
export class FindUniqueProjectArgs {
  where: ProjectWhereUniqueInput
}
