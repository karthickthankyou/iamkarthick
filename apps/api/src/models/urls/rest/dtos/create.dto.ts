import { OmitType } from '@nestjs/swagger'
import { UrlEntity } from '../entity/url.entity'

export class CreateUrl extends OmitType(UrlEntity, ['id']) {}
