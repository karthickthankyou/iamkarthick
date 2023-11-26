import { Injectable } from '@nestjs/common'
import { FindManySocialArgs, FindUniqueSocialArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSocialInput } from './dtos/create-social.input'
import { UpdateSocialInput } from './dtos/update-social.input'

@Injectable()
export class SocialsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSocialInput: CreateSocialInput) {
    return this.prisma.social.create({
      data: createSocialInput,
    })
  }

  findAll(args: FindManySocialArgs) {
    return this.prisma.social.findMany(args)
  }

  findOne(args: FindUniqueSocialArgs) {
    return this.prisma.social.findUnique(args)
  }

  update(updateSocialInput: UpdateSocialInput) {
    const { id, ...data } = updateSocialInput
    return this.prisma.social.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueSocialArgs) {
    return this.prisma.social.delete(args)
  }
}
