import { OmitType } from '@nestjs/swagger'
import { ProjectEntity } from '../entity/project.entity'

export class CreateProject extends OmitType(ProjectEntity, [
  'createdAt',
  'id',
]) {}
