import { Field, ObjectType } from '@nestjs/graphql'
import { Experience as ExperienceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Experience
  implements RestrictProperties<Experience, ExperienceType>
{
  id: number
  title: string
  company: string
  start: Date
  @Field({ nullable: true })
  end: Date
  details: string[]
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
