import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StrategyOrderByWithRelationInput } from './order-by.args'
import { StrategyWhereInput, StrategyWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.StrategyScalarFieldEnum, {
  name: 'StrategyScalarFieldEnum',
})

@ArgsType()
class FindManyStrategyArgsStrict
  implements
    RestrictProperties<
      FindManyStrategyArgsStrict,
      Omit<Prisma.StrategyFindManyArgs, 'include' | 'select'>
    >
{
  where: StrategyWhereInput
  orderBy: StrategyOrderByWithRelationInput[]
  cursor: StrategyWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.StrategyScalarFieldEnum])
  distinct: Prisma.StrategyScalarFieldEnum[]
}

@ArgsType()
export class FindManyStrategyArgs extends PartialType(
  FindManyStrategyArgsStrict,
) {}

@ArgsType()
export class FindUniqueStrategyArgs {
  where: StrategyWhereUniqueInput
}
