import { Controller, Get } from '@nestjs/common'

@Controller('/heath-check')
export class HealthCheckController {
  constructor() {}
  @Get()
  async handle() {
    return 'server: ok'
  }
}
