import { FAQ } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class FaqEntity implements RestrictProperties<FaqEntity, FAQ> {
  id: number
  question: string
  answer: string
}
