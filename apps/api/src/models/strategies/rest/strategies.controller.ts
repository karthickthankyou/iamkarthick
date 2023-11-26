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
import { CreateStrategy } from './dtos/create.dto'
import { StrategyQueryDto } from './dtos/query.dto'
import { UpdateStrategy } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { StrategyEntity } from './entity/strategy.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('strategies')
@Controller('strategies')
export class StrategiesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: StrategyEntity })
  @Post()
  create(@Body() createStrategyDto: CreateStrategy) {
    return this.prisma.strategy.create({ data: createStrategyDto })
  }

  @ApiOkResponse({ type: [StrategyEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: StrategyQueryDto) {
    return this.prisma.strategy.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: StrategyEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.strategy.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: StrategyEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateStrategyDto: UpdateStrategy,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.strategy.update({
      where: { id },
      data: updateStrategyDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.strategy.delete({ where: { id } })
  }
}
