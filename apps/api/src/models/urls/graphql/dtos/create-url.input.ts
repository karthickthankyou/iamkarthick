import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Url } from '../entity/url.entity'

@InputType()
export class CreateUrlInput extends OmitType(Url, ['id'], InputType) {}
