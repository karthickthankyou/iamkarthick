import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { FaqOrderByWithRelationInput } from './order-by.args'
import { FaqWhereInput, FaqWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.FAQScalarFieldEnum, {
  name: 'FaqScalarFieldEnum',
})

@ArgsType()
class FindManyFaqArgsStrict
  implements
    RestrictProperties<
      FindManyFaqArgsStrict,
      Omit<Prisma.FAQFindManyArgs, 'include' | 'select'>
    >
{
  where: FaqWhereInput
  orderBy: FaqOrderByWithRelationInput[]
  cursor: FaqWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.FAQScalarFieldEnum])
  distinct: Prisma.FAQScalarFieldEnum[]
}

@ArgsType()
export class FindManyFaqArgs extends PartialType(FindManyFaqArgsStrict) {}

@ArgsType()
export class FindUniqueFaqArgs {
  where: FaqWhereUniqueInput
}
