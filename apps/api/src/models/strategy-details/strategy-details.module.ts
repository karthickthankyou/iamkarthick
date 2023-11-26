import { Module } from '@nestjs/common'
import { StrategyDetailsService } from './graphql/strategy-details.service'
import { StrategyDetailsResolver } from './graphql/strategy-details.resolver'
import { StrategyDetailsController } from './rest/strategy-details.controller'

@Module({
  providers: [StrategyDetailsResolver, StrategyDetailsService],
  exports: [StrategyDetailsService],
  controllers: [StrategyDetailsController],
})
export class StrategyDetailsModule {}
