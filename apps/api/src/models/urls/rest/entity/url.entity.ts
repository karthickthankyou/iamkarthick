import { Url } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UrlEntity implements RestrictProperties<UrlEntity, Url> {
  id: number
  title: string
  description: string
  url: string
  @IsOptional()
  projectId: number
}
