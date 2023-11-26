import { Field, ObjectType } from '@nestjs/graphql'
import { Resource as ResourceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Resource implements RestrictProperties<Resource, ResourceType> {
  id: number
  type: string
  title: string
  url: string
  @Field({ nullable: true })
  strategyDetailId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
