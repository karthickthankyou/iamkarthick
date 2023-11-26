import { Module } from '@nestjs/common'
import { UrlsService } from './graphql/urls.service'
import { UrlsResolver } from './graphql/urls.resolver'
import { UrlsController } from './rest/urls.controller'

@Module({
  providers: [UrlsResolver, UrlsService],
  exports: [UrlsService],
  controllers: [UrlsController],
})
export class UrlsModule {}
