import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { environmentSchema } from './infrastructure/environment/environment'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => environmentSchema.parse(env),
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
