import { Field, ObjectType } from '@nestjs/graphql'
import { Education as EducationType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Education implements RestrictProperties<Education, EducationType> {
  id: number
  school: string
  degree: string
  start: Date
  @Field({ nullable: true })
  end: Date
  details: string[]
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
