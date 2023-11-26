import { InputType, OmitType } from '@nestjs/graphql'
import { Resource } from '../entity/resource.entity'

@InputType()
export class CreateResourceInput extends OmitType(
  Resource,
  ['id'],
  InputType,
) {}
