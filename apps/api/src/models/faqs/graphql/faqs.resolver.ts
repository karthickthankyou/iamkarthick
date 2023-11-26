import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { FaqsService } from './faqs.service'
import { Faq } from './entity/faq.entity'
import { FindManyFaqArgs, FindUniqueFaqArgs } from './dtos/find.args'
import { CreateFaqInput } from './dtos/create-faq.input'
import { UpdateFaqInput } from './dtos/update-faq.input'

@Resolver(() => Faq)
export class FaqsResolver {
  constructor(private readonly faqsService: FaqsService) {}

  @Mutation(() => Faq)
  createFaq(@Args('createFaqInput') args: CreateFaqInput) {
    return this.faqsService.create(args)
  }

  @Query(() => [Faq], { name: 'faqs' })
  findAll(@Args() args: FindManyFaqArgs) {
    return this.faqsService.findAll(args)
  }

  @Query(() => Faq, { name: 'faq' })
  findOne(@Args() args: FindUniqueFaqArgs) {
    return this.faqsService.findOne(args)
  }

  @Mutation(() => Faq)
  updateFaq(@Args('updateFaqInput') args: UpdateFaqInput) {
    return this.faqsService.update(args)
  }

  @Mutation(() => Faq)
  removeFaq(@Args() args: FindUniqueFaqArgs) {
    return this.faqsService.remove(args)
  }
}
