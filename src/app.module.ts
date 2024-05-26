import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { environmentSchema } from './infrastructure/environment/environment'
import { HttpModule } from './infrastructure/http/http.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => environmentSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
  ],
})
export class AppModule {}
