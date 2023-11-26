import { Module } from '@nestjs/common'
import { ExperiencesService } from './graphql/experiences.service'
import { ExperiencesResolver } from './graphql/experiences.resolver'
import { ExperiencesController } from './rest/experiences.controller'

@Module({
  providers: [ExperiencesResolver, ExperiencesService],
  exports: [ExperiencesService],
  controllers: [ExperiencesController],
})
export class ExperiencesModule {}
