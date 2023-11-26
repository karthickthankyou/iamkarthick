import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ExperienceOrderByWithRelationInput } from './order-by.args'
import { ExperienceWhereInput, ExperienceWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ExperienceScalarFieldEnum, {
  name: 'ExperienceScalarFieldEnum',
})

@ArgsType()
class FindManyExperienceArgsStrict
  implements
    RestrictProperties<
      FindManyExperienceArgsStrict,
      Omit<Prisma.ExperienceFindManyArgs, 'include' | 'select'>
    >
{
  where: ExperienceWhereInput
  orderBy: ExperienceOrderByWithRelationInput[]
  cursor: ExperienceWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ExperienceScalarFieldEnum])
  distinct: Prisma.ExperienceScalarFieldEnum[]
}

@ArgsType()
export class FindManyExperienceArgs extends PartialType(
  FindManyExperienceArgsStrict,
) {}

@ArgsType()
export class FindUniqueExperienceArgs {
  where: ExperienceWhereUniqueInput
}
