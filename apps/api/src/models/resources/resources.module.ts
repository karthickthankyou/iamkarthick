import { Module } from '@nestjs/common'
import { ResourcesService } from './graphql/resources.service'
import { ResourcesResolver } from './graphql/resources.resolver'
import { ResourcesController } from './rest/resources.controller'

@Module({
  providers: [ResourcesResolver, ResourcesService],
  exports: [ResourcesService],
  controllers: [ResourcesController],
})
export class ResourcesModule {}
