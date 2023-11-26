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
import { CreateProject } from './dtos/create.dto'
import { ProjectQueryDto } from './dtos/query.dto'
import { UpdateProject } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ProjectEntity } from './entity/project.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ProjectEntity })
  @Post()
  create(@Body() createProjectDto: CreateProject) {
    return this.prisma.project.create({ data: createProjectDto })
  }

  @ApiOkResponse({ type: [ProjectEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ProjectQueryDto) {
    return this.prisma.project.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ProjectEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.project.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ProjectEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProject,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.project.delete({ where: { id } })
  }
}
