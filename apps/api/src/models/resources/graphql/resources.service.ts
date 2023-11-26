import { Injectable } from '@nestjs/common'
import { FindManyResourceArgs, FindUniqueResourceArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateResourceInput } from './dtos/create-resource.input'
import { UpdateResourceInput } from './dtos/update-resource.input'

@Injectable()
export class ResourcesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createResourceInput: CreateResourceInput) {
    return this.prisma.resource.create({
      data: createResourceInput,
    })
  }

  findAll(args: FindManyResourceArgs) {
    return this.prisma.resource.findMany(args)
  }

  findOne(args: FindUniqueResourceArgs) {
    return this.prisma.resource.findUnique(args)
  }

  update(updateResourceInput: UpdateResourceInput) {
    const { id, ...data } = updateResourceInput
    return this.prisma.resource.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueResourceArgs) {
    return this.prisma.resource.delete(args)
  }
}
