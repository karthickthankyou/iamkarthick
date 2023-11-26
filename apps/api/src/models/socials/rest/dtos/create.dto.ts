import { OmitType } from '@nestjs/swagger'
import { SocialEntity } from '../entity/social.entity'

export class CreateSocial extends OmitType(SocialEntity, ['id']) {}
