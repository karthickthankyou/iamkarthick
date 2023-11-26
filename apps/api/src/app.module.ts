import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'

import { PrismaModule } from './common/prisma/prisma.module'
import { AuthModule } from './common/auth/auth.module'
import { EducationsModule } from './models/educations/educations.module'
import { ExperiencesModule } from './models/experiences/experiences.module'
import { ProjectsModule } from './models/projects/projects.module'
import { SocialsModule } from './models/socials/socials.module'
import { TechnologiesModule } from './models/technologies/technologies.module'
import { UrlsModule } from './models/urls/urls.module'
import { FaqsModule } from './models/faqs/faqs.module'
import { StrategiesModule } from './models/strategies/strategies.module'
import { StrategyDetailsModule } from './models/strategy-details/strategy-details.module'
import { ResourcesModule } from './models/resources/resources.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,

    EducationsModule,
    ExperiencesModule,
    ProjectsModule,
    SocialsModule,
    TechnologiesModule,
    UrlsModule,
    FaqsModule,
    StrategiesModule,
    StrategyDetailsModule,
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
