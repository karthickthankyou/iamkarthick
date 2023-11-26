import { Social } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class SocialEntity implements RestrictProperties<SocialEntity, Social> {
  id: number
  title: string
  @IsOptional()
  description: string
  url: string
}
