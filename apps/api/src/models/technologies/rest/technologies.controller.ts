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
import { CreateTechnology } from './dtos/create.dto'
import { TechnologyQueryDto } from './dtos/query.dto'
import { UpdateTechnology } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { TechnologyEntity } from './entity/technology.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('technologies')
@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TechnologyEntity })
  @Post()
  create(@Body() createTechnologyDto: CreateTechnology) {
    return this.prisma.technology.create({ data: createTechnologyDto })
  }

  @ApiOkResponse({ type: [TechnologyEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: TechnologyQueryDto) {
    return this.prisma.technology.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: TechnologyEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.technology.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: TechnologyEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTechnologyDto: UpdateTechnology,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.technology.update({
      where: { id },
      data: updateTechnologyDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.technology.delete({ where: { id } })
  }
}
