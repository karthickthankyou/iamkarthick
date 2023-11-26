import { Injectable } from '@nestjs/common'
import { FindManyStrategyArgs, FindUniqueStrategyArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateStrategyInput } from './dtos/create-strategy.input'
import { UpdateStrategyInput } from './dtos/update-strategy.input'

@Injectable()
export class StrategiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStrategyInput: CreateStrategyInput) {
    return this.prisma.strategy.create({
      data: createStrategyInput,
    })
  }

  findAll(args: FindManyStrategyArgs) {
    return this.prisma.strategy.findMany(args)
  }

  findOne(args: FindUniqueStrategyArgs) {
    return this.prisma.strategy.findUnique(args)
  }

  update(updateStrategyInput: UpdateStrategyInput) {
    const { id, ...data } = updateStrategyInput
    return this.prisma.strategy.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueStrategyArgs) {
    return this.prisma.strategy.delete(args)
  }
}
