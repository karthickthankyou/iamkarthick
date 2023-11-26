import { OmitType } from '@nestjs/swagger'
import { StrategyEntity } from '../entity/strategy.entity'

export class CreateStrategy extends OmitType(StrategyEntity, ['id']) {}
