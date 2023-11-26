import { InputType, OmitType } from '@nestjs/graphql'
import { Faq } from '../entity/faq.entity'

@InputType()
export class CreateFaqInput extends OmitType(Faq, ['id'], InputType) {}
