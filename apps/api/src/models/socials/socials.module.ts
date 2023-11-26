import { Module } from '@nestjs/common'
import { SocialsService } from './graphql/socials.service'
import { SocialsResolver } from './graphql/socials.resolver'
import { SocialsController } from './rest/socials.controller'

@Module({
  providers: [SocialsResolver, SocialsService],
  exports: [SocialsService],
  controllers: [SocialsController],
})
export class SocialsModule {}
