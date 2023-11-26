import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EducationOrderByWithRelationInput } from './order-by.args'
import { EducationWhereInput, EducationWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EducationScalarFieldEnum, {
  name: 'EducationScalarFieldEnum',
})

@ArgsType()
class FindManyEducationArgsStrict
  implements
    RestrictProperties<
      FindManyEducationArgsStrict,
      Omit<Prisma.EducationFindManyArgs, 'include' | 'select'>
    >
{
  where: EducationWhereInput
  orderBy: EducationOrderByWithRelationInput[]
  cursor: EducationWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.EducationScalarFieldEnum])
  distinct: Prisma.EducationScalarFieldEnum[]
}

@ArgsType()
export class FindManyEducationArgs extends PartialType(
  FindManyEducationArgsStrict,
) {}

@ArgsType()
export class FindUniqueEducationArgs {
  where: EducationWhereUniqueInput
}
