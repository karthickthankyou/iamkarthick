import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ResourcesService } from './resources.service'
import { Resource } from './entity/resource.entity'
import { FindManyResourceArgs, FindUniqueResourceArgs } from './dtos/find.args'
import { CreateResourceInput } from './dtos/create-resource.input'
import { UpdateResourceInput } from './dtos/update-resource.input'

@Resolver(() => Resource)
export class ResourcesResolver {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Mutation(() => Resource)
  createResource(@Args('createResourceInput') args: CreateResourceInput) {
    return this.resourcesService.create(args)
  }

  @Query(() => [Resource], { name: 'resources' })
  findAll(@Args() args: FindManyResourceArgs) {
    return this.resourcesService.findAll(args)
  }

  @Query(() => Resource, { name: 'resource' })
  findOne(@Args() args: FindUniqueResourceArgs) {
    return this.resourcesService.findOne(args)
  }

  @Mutation(() => Resource)
  updateResource(@Args('updateResourceInput') args: UpdateResourceInput) {
    return this.resourcesService.update(args)
  }

  @Mutation(() => Resource)
  removeResource(@Args() args: FindUniqueResourceArgs) {
    return this.resourcesService.remove(args)
  }
}
