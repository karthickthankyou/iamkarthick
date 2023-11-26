import { Injectable } from '@nestjs/common'
import {
  FindManyEducationArgs,
  FindUniqueEducationArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEducationInput } from './dtos/create-education.input'
import { UpdateEducationInput } from './dtos/update-education.input'

@Injectable()
export class EducationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEducationInput: CreateEducationInput) {
    return this.prisma.education.create({
      data: createEducationInput,
    })
  }

  findAll(args: FindManyEducationArgs) {
    return this.prisma.education.findMany(args)
  }

  findOne(args: FindUniqueEducationArgs) {
    return this.prisma.education.findUnique(args)
  }

  update(updateEducationInput: UpdateEducationInput) {
    const { id, ...data } = updateEducationInput
    return this.prisma.education.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueEducationArgs) {
    return this.prisma.education.delete(args)
  }
}
