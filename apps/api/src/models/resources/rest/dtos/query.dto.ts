import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ResourceQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ResourceScalarFieldEnum))
  sortBy?: string
}
