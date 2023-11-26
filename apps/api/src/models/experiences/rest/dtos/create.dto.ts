import { OmitType } from '@nestjs/swagger'
import { ExperienceEntity } from '../entity/experience.entity'

export class CreateExperience extends OmitType(ExperienceEntity, ['id']) {}
