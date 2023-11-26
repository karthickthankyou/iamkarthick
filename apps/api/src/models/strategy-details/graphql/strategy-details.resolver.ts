import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StrategyDetailsService } from './strategy-details.service'
import { StrategyDetail } from './entity/strategy-detail.entity'
import {
  FindManyStrategyDetailArgs,
  FindUniqueStrategyDetailArgs,
} from './dtos/find.args'
import { CreateStrategyDetailInput } from './dtos/create-strategy-detail.input'
import { UpdateStrategyDetailInput } from './dtos/update-strategy-detail.input'

@Resolver(() => StrategyDetail)
export class StrategyDetailsResolver {
  constructor(
    private readonly strategyDetailsService: StrategyDetailsService,
  ) {}

  @Mutation(() => StrategyDetail)
  createStrategyDetail(
    @Args('createStrategyDetailInput') args: CreateStrategyDetailInput,
  ) {
    return this.strategyDetailsService.create(args)
  }

  @Query(() => [StrategyDetail], { name: 'strategyDetails' })
  findAll(@Args() args: FindManyStrategyDetailArgs) {
    return this.strategyDetailsService.findAll(args)
  }

  @Query(() => StrategyDetail, { name: 'strategyDetail' })
  findOne(@Args() args: FindUniqueStrategyDetailArgs) {
    return this.strategyDetailsService.findOne(args)
  }

  @Mutation(() => StrategyDetail)
  updateStrategyDetail(
    @Args('updateStrategyDetailInput') args: UpdateStrategyDetailInput,
  ) {
    return this.strategyDetailsService.update(args)
  }

  @Mutation(() => StrategyDetail)
  removeStrategyDetail(@Args() args: FindUniqueStrategyDetailArgs) {
    return this.strategyDetailsService.remove(args)
  }
}
