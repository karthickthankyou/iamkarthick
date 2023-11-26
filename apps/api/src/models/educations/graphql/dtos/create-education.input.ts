import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Education } from '../entity/education.entity'

@InputType()
export class CreateEducationInput extends OmitType(
  Education,
  ['id'],
  InputType,
) {}
