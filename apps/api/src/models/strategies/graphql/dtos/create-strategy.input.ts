import { InputType, OmitType } from '@nestjs/graphql'
import { Strategy } from '../entity/strategy.entity'

@InputType()
export class CreateStrategyInput extends OmitType(
  Strategy,
  ['id'],
  InputType,
) {}
