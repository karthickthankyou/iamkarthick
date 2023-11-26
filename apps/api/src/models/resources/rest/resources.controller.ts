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
import { CreateResource } from './dtos/create.dto'
import { ResourceQueryDto } from './dtos/query.dto'
import { UpdateResource } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ResourceEntity } from './entity/resource.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('resources')
@Controller('resources')
export class ResourcesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ResourceEntity })
  @Post()
  create(@Body() createResourceDto: CreateResource) {
    return this.prisma.resource.create({ data: createResourceDto })
  }

  @ApiOkResponse({ type: [ResourceEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ResourceQueryDto) {
    return this.prisma.resource.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ResourceEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.resource.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ResourceEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateResourceDto: UpdateResource,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.resource.update({
      where: { id },
      data: updateResourceDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.resource.delete({ where: { id } })
  }
}
