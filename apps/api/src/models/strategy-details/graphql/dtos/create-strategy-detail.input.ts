import { InputType, OmitType } from '@nestjs/graphql'
import { StrategyDetail } from '../entity/strategy-detail.entity'

@InputType()
export class CreateStrategyDetailInput extends OmitType(
  StrategyDetail,
  ['id'],
  InputType,
) {}
