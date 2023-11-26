import { Education } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class EducationEntity
  implements RestrictProperties<EducationEntity, Education>
{
  id: number
  school: string
  degree: string
  start: Date
  @IsOptional()
  end: Date
  details: string[]
}
