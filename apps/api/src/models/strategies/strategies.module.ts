import { Module } from '@nestjs/common'
import { StrategiesService } from './graphql/strategies.service'
import { StrategiesResolver } from './graphql/strategies.resolver'
import { StrategiesController } from './rest/strategies.controller'

@Module({
  providers: [StrategiesResolver, StrategiesService],
  exports: [StrategiesService],
  controllers: [StrategiesController],
})
export class StrategiesModule {}
