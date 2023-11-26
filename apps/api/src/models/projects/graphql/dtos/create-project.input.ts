import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Project } from '../entity/project.entity'

@InputType()
export class CreateProjectInput extends OmitType(
  Project,
  ['id', 'createdAt'],
  InputType,
) {}
