import { Module } from '@nestjs/common'
import { FaqsService } from './graphql/faqs.service'
import { FaqsResolver } from './graphql/faqs.resolver'
import { FaqsController } from './rest/faqs.controller'

@Module({
  providers: [FaqsResolver, FaqsService],
  exports: [FaqsService],
  controllers: [FaqsController],
})
export class FaqsModule {}
