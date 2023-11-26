import { Injectable } from '@nestjs/common'
import {
  FindManyStrategyDetailArgs,
  FindUniqueStrategyDetailArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateStrategyDetailInput } from './dtos/create-strategy-detail.input'
import { UpdateStrategyDetailInput } from './dtos/update-strategy-detail.input'

@Injectable()
export class StrategyDetailsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStrategyDetailInput: CreateStrategyDetailInput) {
    return this.prisma.strategyDetail.create({
      data: createStrategyDetailInput,
    })
  }

  findAll(args: FindManyStrategyDetailArgs) {
    return this.prisma.strategyDetail.findMany(args)
  }

  findOne(args: FindUniqueStrategyDetailArgs) {
    return this.prisma.strategyDetail.findUnique(args)
  }

  update(updateStrategyDetailInput: UpdateStrategyDetailInput) {
    const { id, ...data } = updateStrategyDetailInput
    return this.prisma.strategyDetail.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueStrategyDetailArgs) {
    return this.prisma.strategyDetail.delete(args)
  }
}
