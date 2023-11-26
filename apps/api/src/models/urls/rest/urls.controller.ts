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
import { CreateUrl } from './dtos/create.dto'
import { UrlQueryDto } from './dtos/query.dto'
import { UpdateUrl } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { UrlEntity } from './entity/url.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('urls')
@Controller('urls')
export class UrlsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UrlEntity })
  @Post()
  create(@Body() createUrlDto: CreateUrl) {
    return this.prisma.url.create({ data: createUrlDto })
  }

  @ApiOkResponse({ type: [UrlEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: UrlQueryDto) {
    return this.prisma.url.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: UrlEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.url.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: UrlEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUrlDto: UpdateUrl,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.url.update({
      where: { id },
      data: updateUrlDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.url.delete({ where: { id } })
  }
}
