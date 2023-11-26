import { Injectable } from '@nestjs/common'
import { FindManyFaqArgs, FindUniqueFaqArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateFaqInput } from './dtos/create-faq.input'
import { UpdateFaqInput } from './dtos/update-faq.input'

@Injectable()
export class FaqsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFaqInput: CreateFaqInput) {
    return this.prisma.fAQ.create({
      data: createFaqInput,
    })
  }

  findAll(args: FindManyFaqArgs) {
    return this.prisma.fAQ.findMany(args)
  }

  findOne(args: FindUniqueFaqArgs) {
    return this.prisma.fAQ.findUnique(args)
  }

  update(updateFaqInput: UpdateFaqInput) {
    const { id, ...data } = updateFaqInput
    return this.prisma.fAQ.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueFaqArgs) {
    return this.prisma.fAQ.delete(args)
  }
}
