import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateSocial } from './dtos/create.dto'
import { SocialQueryDto } from './dtos/query.dto'
import { UpdateSocial } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { SocialEntity } from './entity/social.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('socials')
@Controller('socials')
export class SocialsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SocialEntity })
  @Post()
  create(@Body() createSocialDto: CreateSocial) {
    return this.prisma.social.create({ data: createSocialDto })
  }

  @ApiOkResponse({ type: [SocialEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: SocialQueryDto) {
    return this.prisma.social.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: SocialEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.social.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: SocialEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSocialDto: UpdateSocial,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.social.update({
      where: { id },
      data: updateSocialDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.social.delete({ where: { id } })
  }
}
