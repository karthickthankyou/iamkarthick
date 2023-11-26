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
import { CreateFaq } from './dtos/create.dto'
import { FaqQueryDto } from './dtos/query.dto'
import { UpdateFaq } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { FaqEntity } from './entity/faq.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('faqs')
@Controller('faqs')
export class FaqsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FaqEntity })
  @Post()
  create(@Body() createFaqDto: CreateFaq) {
    return this.prisma.fAQ.create({ data: createFaqDto })
  }

  @ApiOkResponse({ type: [FaqEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: FaqQueryDto) {
    return this.prisma.fAQ.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: FaqEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.fAQ.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: FaqEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFaqDto: UpdateFaq,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.fAQ.update({
      where: { id },
      data: updateFaqDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.fAQ.delete({ where: { id } })
  }
}
