import { ObjectType } from '@nestjs/graphql'
import { Strategy as StrategyType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Strategy implements RestrictProperties<Strategy, StrategyType> {
  id: number
  title: string
  description: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
