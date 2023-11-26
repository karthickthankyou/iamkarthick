import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Project as ProjectType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.Tag, { name: 'Tag' })

@ObjectType()
export class Project implements RestrictProperties<Project, ProjectType> {
  id: number
  createdAt: Date
  date: Date
  title: string
  description: string
  images: string[]
  github: string
  linesOfCode: number
  @Field(() => [$Enums.Tag])
  Tags: $Enums.Tag[]
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
