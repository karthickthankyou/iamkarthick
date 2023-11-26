import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SocialsService } from './socials.service'
import { Social } from './entity/social.entity'
import { FindManySocialArgs, FindUniqueSocialArgs } from './dtos/find.args'
import { CreateSocialInput } from './dtos/create-social.input'
import { UpdateSocialInput } from './dtos/update-social.input'

@Resolver(() => Social)
export class SocialsResolver {
  constructor(private readonly socialsService: SocialsService) {}

  @Mutation(() => Social)
  createSocial(@Args('createSocialInput') args: CreateSocialInput) {
    return this.socialsService.create(args)
  }

  @Query(() => [Social], { name: 'socials' })
  findAll(@Args() args: FindManySocialArgs) {
    return this.socialsService.findAll(args)
  }

  @Query(() => Social, { name: 'social' })
  findOne(@Args() args: FindUniqueSocialArgs) {
    return this.socialsService.findOne(args)
  }

  @Mutation(() => Social)
  updateSocial(@Args('updateSocialInput') args: UpdateSocialInput) {
    return this.socialsService.update(args)
  }

  @Mutation(() => Social)
  removeSocial(@Args() args: FindUniqueSocialArgs) {
    return this.socialsService.remove(args)
  }
}
