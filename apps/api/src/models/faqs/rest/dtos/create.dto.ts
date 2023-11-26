import { OmitType } from '@nestjs/swagger'
import { FaqEntity } from '../entity/faq.entity'

export class CreateFaq extends OmitType(FaqEntity, ['id']) {}
