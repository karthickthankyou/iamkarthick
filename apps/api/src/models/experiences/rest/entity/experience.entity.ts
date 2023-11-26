import { Experience } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ExperienceEntity
  implements RestrictProperties<ExperienceEntity, Experience>
{
  id: number
  title: string
  company: string
  start: Date
  @IsOptional()
  end: Date
  details: string[]
}
