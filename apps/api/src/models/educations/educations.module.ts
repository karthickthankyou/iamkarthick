import { Module } from '@nestjs/common'
import { EducationsService } from './graphql/educations.service'
import { EducationsResolver } from './graphql/educations.resolver'
import { EducationsController } from './rest/educations.controller'

@Module({
  providers: [EducationsResolver, EducationsService],
  exports: [EducationsService],
  controllers: [EducationsController],
})
export class EducationsModule {}
