import { Module } from '@nestjs/common'
import { TechnologiesService } from './graphql/technologies.service'
import { TechnologiesResolver } from './graphql/technologies.resolver'
import { TechnologiesController } from './rest/technologies.controller'

@Module({
  providers: [TechnologiesResolver, TechnologiesService],
  exports: [TechnologiesService],
  controllers: [TechnologiesController],
})
export class TechnologiesModule {}
