import { CreateSocialInput } from './create-social.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Social } from '@prisma/client'

@InputType()
export class UpdateSocialInput extends PartialType(CreateSocialInput) {
  id: Social['id']
}
