import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UrlOrderByWithRelationInput } from './order-by.args'
import { UrlWhereInput, UrlWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.UrlScalarFieldEnum, {
  name: 'UrlScalarFieldEnum',
})

@ArgsType()
class FindManyUrlArgsStrict
  implements
    RestrictProperties<
      FindManyUrlArgsStrict,
      Omit<Prisma.UrlFindManyArgs, 'include' | 'select'>
    >
{
  where: UrlWhereInput
  orderBy: UrlOrderByWithRelationInput[]
  cursor: UrlWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.UrlScalarFieldEnum])
  distinct: Prisma.UrlScalarFieldEnum[]
}

@ArgsType()
export class FindManyUrlArgs extends PartialType(FindManyUrlArgsStrict) {}

@ArgsType()
export class FindUniqueUrlArgs {
  where: UrlWhereUniqueInput
}
