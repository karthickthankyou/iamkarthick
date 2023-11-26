import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ResourceOrderByWithRelationInput } from './order-by.args'
import { ResourceWhereInput, ResourceWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ResourceScalarFieldEnum, {
  name: 'ResourceScalarFieldEnum',
})

@ArgsType()
class FindManyResourceArgsStrict
  implements
    RestrictProperties<
      FindManyResourceArgsStrict,
      Omit<Prisma.ResourceFindManyArgs, 'include' | 'select'>
    >
{
  where: ResourceWhereInput
  orderBy: ResourceOrderByWithRelationInput[]
  cursor: ResourceWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ResourceScalarFieldEnum])
  distinct: Prisma.ResourceScalarFieldEnum[]
}

@ArgsType()
export class FindManyResourceArgs extends PartialType(
  FindManyResourceArgsStrict,
) {}

@ArgsType()
export class FindUniqueResourceArgs {
  where: ResourceWhereUniqueInput
}
