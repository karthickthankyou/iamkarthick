import { OmitType } from '@nestjs/swagger'
import { StrategyDetailEntity } from '../entity/strategy-detail.entity'

export class CreateStrategyDetail extends OmitType(StrategyDetailEntity, [
  'id',
]) {}
