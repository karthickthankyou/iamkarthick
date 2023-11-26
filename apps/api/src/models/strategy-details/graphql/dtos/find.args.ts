import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { StrategyDetailOrderByWithRelationInput } from './order-by.args'
import {
  StrategyDetailWhereInput,
  StrategyDetailWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.StrategyDetailScalarFieldEnum, {
  name: 'StrategyDetailScalarFieldEnum',
})

@ArgsType()
class FindManyStrategyDetailArgsStrict
  implements
    RestrictProperties<
      FindManyStrategyDetailArgsStrict,
      Omit<Prisma.StrategyDetailFindManyArgs, 'include' | 'select'>
    >
{
  where: StrategyDetailWhereInput
  orderBy: StrategyDetailOrderByWithRelationInput[]
  cursor: StrategyDetailWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.StrategyDetailScalarFieldEnum])
  distinct: Prisma.StrategyDetailScalarFieldEnum[]
}

@ArgsType()
export class FindManyStrategyDetailArgs extends PartialType(
  FindManyStrategyDetailArgsStrict,
) {}

@ArgsType()
export class FindUniqueStrategyDetailArgs {
  where: StrategyDetailWhereUniqueInput
}
