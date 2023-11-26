import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SocialOrderByWithRelationInput } from './order-by.args'
import { SocialWhereInput, SocialWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SocialScalarFieldEnum, {
  name: 'SocialScalarFieldEnum',
})

@ArgsType()
class FindManySocialArgsStrict
  implements
    RestrictProperties<
      FindManySocialArgsStrict,
      Omit<Prisma.SocialFindManyArgs, 'include' | 'select'>
    >
{
  where: SocialWhereInput
  orderBy: SocialOrderByWithRelationInput[]
  cursor: SocialWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SocialScalarFieldEnum])
  distinct: Prisma.SocialScalarFieldEnum[]
}

@ArgsType()
export class FindManySocialArgs extends PartialType(FindManySocialArgsStrict) {}

@ArgsType()
export class FindUniqueSocialArgs {
  where: SocialWhereUniqueInput
}
