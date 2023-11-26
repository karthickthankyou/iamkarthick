import { OmitType } from '@nestjs/swagger'
import { TechnologyEntity } from '../entity/technology.entity'

export class CreateTechnology extends OmitType(TechnologyEntity, ['id']) {}
