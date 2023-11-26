import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { EducationsService } from './educations.service'
import { Education } from './entity/education.entity'
import {
  FindManyEducationArgs,
  FindUniqueEducationArgs,
} from './dtos/find.args'
import { CreateEducationInput } from './dtos/create-education.input'
import { UpdateEducationInput } from './dtos/update-education.input'

@Resolver(() => Education)
export class EducationsResolver {
  constructor(private readonly educationsService: EducationsService) {}

  @Mutation(() => Education)
  createEducation(@Args('createEducationInput') args: CreateEducationInput) {
    return this.educationsService.create(args)
  }

  @Query(() => [Education], { name: 'educations' })
  findAll(@Args() args: FindManyEducationArgs) {
    return this.educationsService.findAll(args)
  }

  @Query(() => Education, { name: 'education' })
  findOne(@Args() args: FindUniqueEducationArgs) {
    return this.educationsService.findOne(args)
  }

  @Mutation(() => Education)
  updateEducation(@Args('updateEducationInput') args: UpdateEducationInput) {
    return this.educationsService.update(args)
  }

  @Mutation(() => Education)
  removeEducation(@Args() args: FindUniqueEducationArgs) {
    return this.educationsService.remove(args)
  }
}
