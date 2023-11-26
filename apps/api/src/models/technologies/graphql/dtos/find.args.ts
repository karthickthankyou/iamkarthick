import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TechnologyOrderByWithRelationInput } from './order-by.args'
import { TechnologyWhereInput, TechnologyWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.TechnologyScalarFieldEnum, {
  name: 'TechnologyScalarFieldEnum',
})

@ArgsType()
class FindManyTechnologyArgsStrict
  implements
    RestrictProperties<
      FindManyTechnologyArgsStrict,
      Omit<Prisma.TechnologyFindManyArgs, 'include' | 'select'>
    >
{
  where: TechnologyWhereInput
  orderBy: TechnologyOrderByWithRelationInput[]
  cursor: TechnologyWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.TechnologyScalarFieldEnum])
  distinct: Prisma.TechnologyScalarFieldEnum[]
}

@ArgsType()
export class FindManyTechnologyArgs extends PartialType(
  FindManyTechnologyArgsStrict,
) {}

@ArgsType()
export class FindUniqueTechnologyArgs {
  where: TechnologyWhereUniqueInput
}
