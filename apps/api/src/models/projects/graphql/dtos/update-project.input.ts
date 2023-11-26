import { CreateProjectInput } from './create-project.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Project } from '@prisma/client'

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  id: Project['id']
}
