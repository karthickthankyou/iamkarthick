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
import { CreateStrategyDetail } from './dtos/create.dto'
import { StrategyDetailQueryDto } from './dtos/query.dto'
import { UpdateStrategyDetail } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'

import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { StrategyDetailEntity } from './entity/strategy-detail.entity'

@ApiTags('strategy-details')
@Controller('strategy-details')
export class StrategyDetailsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: StrategyDetailEntity })
  @Post()
  create(@Body() createStrategyDetailDto: CreateStrategyDetail) {
    return this.prisma.strategyDetail.create({ data: createStrategyDetailDto })
  }

  @ApiOkResponse({ type: [StrategyDetailEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: StrategyDetailQueryDto) {
    return this.prisma.strategyDetail.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: StrategyDetailEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.strategyDetail.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: StrategyDetailEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateStrategyDetailDto: UpdateStrategyDetail,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.strategyDetail.update({
      where: { id },
      data: updateStrategyDetailDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.strategyDetail.delete({ where: { id } })
  }
}
