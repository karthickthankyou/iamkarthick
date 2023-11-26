import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Experience } from '../entity/experience.entity'

@InputType()
export class CreateExperienceInput extends OmitType(
  Experience,
  ['id'],
  InputType,
) {}
