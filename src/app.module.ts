import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from './infrastructure/http/http.module'
import { RentingDatabaseModule } from './infrastructure/databases/postgres/renting-database.module'
import { environmentSchema } from './infrastructure/environment/environment'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => environmentSchema.parse(env),
      isGlobal: true,
    }),
    RentingDatabaseModule,
    HttpModule,
  ],
})
export class AppModule {}
