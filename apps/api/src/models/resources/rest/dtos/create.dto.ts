import { OmitType } from '@nestjs/swagger'
import { ResourceEntity } from '../entity/resource.entity'

export class CreateResource extends OmitType(ResourceEntity, ['id']) {}
