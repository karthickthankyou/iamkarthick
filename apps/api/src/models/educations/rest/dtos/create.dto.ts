import { OmitType } from '@nestjs/swagger'
import { EducationEntity } from '../entity/education.entity'

export class CreateEducation extends OmitType(EducationEntity, ['id']) {}
