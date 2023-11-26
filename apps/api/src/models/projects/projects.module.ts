import { Module } from '@nestjs/common'
import { ProjectsService } from './graphql/projects.service'
import { ProjectsResolver } from './graphql/projects.resolver'
import { ProjectsController } from './rest/projects.controller'

@Module({
  providers: [ProjectsResolver, ProjectsService],
  exports: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
