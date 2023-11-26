import { Resource } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ResourceEntity
  implements RestrictProperties<ResourceEntity, Resource>
{
  id: number
  type: string
  title: string
  url: string
  strategyDetailId: number
}
