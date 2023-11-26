import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Social } from '../entity/social.entity'

@InputType()
export class CreateSocialInput extends OmitType(Social, ['id'], InputType) {}
