import { Field, registerEnumType } from '@nestjs/graphql'
import { $Enums, Project } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ProjectEntity
  implements RestrictProperties<ProjectEntity, Project>
{
  id: number
  createdAt: Date
  date: Date
  title: string
  description: string
  images: string[]
  github: string
  linesOfCode: number
  Tags: $Enums.Tag[]
}
