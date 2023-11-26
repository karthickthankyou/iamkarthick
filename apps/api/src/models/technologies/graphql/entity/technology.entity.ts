import { ObjectType } from '@nestjs/graphql'
import { Technology as TechnologyType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Technology
  implements RestrictProperties<Technology, TechnologyType>
{
  id: number
  name: string
  description: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
