import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StrategiesService } from './strategies.service'
import { Strategy } from './entity/strategy.entity'
import { FindManyStrategyArgs, FindUniqueStrategyArgs } from './dtos/find.args'
import { CreateStrategyInput } from './dtos/create-strategy.input'
import { UpdateStrategyInput } from './dtos/update-strategy.input'

@Resolver(() => Strategy)
export class StrategiesResolver {
  constructor(private readonly strategiesService: StrategiesService) {}

  @Mutation(() => Strategy)
  createStrategy(@Args('createStrategyInput') args: CreateStrategyInput) {
    return this.strategiesService.create(args)
  }

  @Query(() => [Strategy], { name: 'strategies' })
  findAll(@Args() args: FindManyStrategyArgs) {
    return this.strategiesService.findAll(args)
  }

  @Query(() => Strategy, { name: 'strategy' })
  findOne(@Args() args: FindUniqueStrategyArgs) {
    return this.strategiesService.findOne(args)
  }

  @Mutation(() => Strategy)
  updateStrategy(@Args('updateStrategyInput') args: UpdateStrategyInput) {
    return this.strategiesService.update(args)
  }

  @Mutation(() => Strategy)
  removeStrategy(@Args() args: FindUniqueStrategyArgs) {
    return this.strategiesService.remove(args)
  }
}
