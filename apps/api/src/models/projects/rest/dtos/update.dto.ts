import { PartialType } from '@nestjs/swagger'
import { CreateProject } from './create.dto'
import { Project } from '@prisma/client'

export class UpdateProject extends PartialType(CreateProject) {
  id: Project['id']
}
