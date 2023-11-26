import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Technology } from '../entity/technology.entity'

@InputType()
export class CreateTechnologyInput extends OmitType(
  Technology,
  ['id'],
  InputType,
) {}
