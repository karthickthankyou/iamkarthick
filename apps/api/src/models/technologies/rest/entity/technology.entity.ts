import { Technology } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class TechnologyEntity
  implements RestrictProperties<TechnologyEntity, Technology>
{
  id: number
  name: string
  description: string
}
