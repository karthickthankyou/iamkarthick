import { ObjectType } from '@nestjs/graphql'
import { FAQ as FaqType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Faq implements RestrictProperties<Faq, FaqType> {
  id: number
  question: string
  answer: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
