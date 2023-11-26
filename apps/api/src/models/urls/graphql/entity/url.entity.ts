import { Field, ObjectType } from '@nestjs/graphql'
import { Url as UrlType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Url implements RestrictProperties<Url, UrlType> {
  id: number
  title: string
  description: string
  url: string
  @Field({ nullable: true })
  projectId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
