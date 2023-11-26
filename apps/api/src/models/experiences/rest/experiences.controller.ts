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
import { CreateExperience } from './dtos/create.dto'
import { ExperienceQueryDto } from './dtos/query.dto'
import { UpdateExperience } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ExperienceEntity } from './entity/experience.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('experiences')
@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ExperienceEntity })
  @Post()
  create(@Body() createExperienceDto: CreateExperience) {
    return this.prisma.experience.create({ data: createExperienceDto })
  }

  @ApiOkResponse({ type: [ExperienceEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ExperienceQueryDto) {
    return this.prisma.experience.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ExperienceEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.experience.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ExperienceEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateExperienceDto: UpdateExperience,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.experience.update({
      where: { id },
      data: updateExperienceDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.experience.delete({ where: { id } })
  }
}
