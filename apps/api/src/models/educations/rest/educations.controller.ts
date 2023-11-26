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
import { CreateEducation } from './dtos/create.dto'
import { EducationQueryDto } from './dtos/query.dto'
import { UpdateEducation } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { EducationEntity } from './entity/education.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('educations')
@Controller('educations')
export class EducationsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: EducationEntity })
  @Post()
  create(@Body() createEducationDto: CreateEducation) {
    return this.prisma.education.create({ data: createEducationDto })
  }

  @ApiOkResponse({ type: [EducationEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: EducationQueryDto) {
    return this.prisma.education.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: EducationEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.education.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: EducationEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateEducationDto: UpdateEducation,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.education.update({
      where: { id },
      data: updateEducationDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.education.delete({ where: { id } })
  }
}
