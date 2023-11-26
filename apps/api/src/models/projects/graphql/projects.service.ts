import { Injectable } from '@nestjs/common'
import { FindManyProjectArgs, FindUniqueProjectArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateProjectInput } from './dtos/create-project.input'
import { UpdateProjectInput } from './dtos/update-project.input'

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProjectInput: CreateProjectInput) {
    return this.prisma.project.create({
      data: createProjectInput,
    })
  }

  findAll(args: FindManyProjectArgs) {
    return this.prisma.project.findMany(args)
  }

  findOne(args: FindUniqueProjectArgs) {
    return this.prisma.project.findUnique(args)
  }

  update(updateProjectInput: UpdateProjectInput) {
    const { id, ...data } = updateProjectInput
    return this.prisma.project.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueProjectArgs) {
    return this.prisma.project.delete(args)
  }
}
