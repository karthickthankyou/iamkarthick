import { Field, ObjectType } from '@nestjs/graphql'
import { Social as SocialType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Social implements RestrictProperties<Social, SocialType> {
  id: number
  title: string
  @Field({ nullable: true })
  description: string
  url: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
