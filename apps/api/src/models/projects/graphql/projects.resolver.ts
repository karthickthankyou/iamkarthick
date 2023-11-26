import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { Project } from './entity/project.entity'
import { FindManyProjectArgs, FindUniqueProjectArgs } from './dtos/find.args'
import { CreateProjectInput } from './dtos/create-project.input'
import { UpdateProjectInput } from './dtos/update-project.input'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => Project)
  createProject(@Args('createProjectInput') args: CreateProjectInput) {
    return this.projectsService.create(args)
  }

  @Query(() => [Project], { name: 'projects' })
  findAll(@Args() args: FindManyProjectArgs) {
    return this.projectsService.findAll(args)
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args() args: FindUniqueProjectArgs) {
    return this.projectsService.findOne(args)
  }

  @Mutation(() => Project)
  updateProject(@Args('updateProjectInput') args: UpdateProjectInput) {
    return this.projectsService.update(args)
  }

  @Mutation(() => Project)
  removeProject(@Args() args: FindUniqueProjectArgs) {
    return this.projectsService.remove(args)
  }
}
