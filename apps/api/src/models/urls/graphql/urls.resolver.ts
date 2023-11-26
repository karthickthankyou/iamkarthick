import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UrlsService } from './urls.service'
import { Url } from './entity/url.entity'
import { FindManyUrlArgs, FindUniqueUrlArgs } from './dtos/find.args'
import { CreateUrlInput } from './dtos/create-url.input'
import { UpdateUrlInput } from './dtos/update-url.input'

@Resolver(() => Url)
export class UrlsResolver {
  constructor(private readonly urlsService: UrlsService) {}

  @Mutation(() => Url)
  createUrl(@Args('createUrlInput') args: CreateUrlInput) {
    return this.urlsService.create(args)
  }

  @Query(() => [Url], { name: 'urls' })
  findAll(@Args() args: FindManyUrlArgs) {
    return this.urlsService.findAll(args)
  }

  @Query(() => Url, { name: 'url' })
  findOne(@Args() args: FindUniqueUrlArgs) {
    return this.urlsService.findOne(args)
  }

  @Mutation(() => Url)
  updateUrl(@Args('updateUrlInput') args: UpdateUrlInput) {
    return this.urlsService.update(args)
  }

  @Mutation(() => Url)
  removeUrl(@Args() args: FindUniqueUrlArgs) {
    return this.urlsService.remove(args)
  }
}
