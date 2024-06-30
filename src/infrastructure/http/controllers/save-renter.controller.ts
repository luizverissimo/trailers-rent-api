import { CreateRenterUseCase } from '@/domain/renting/application/use-cases/renter/create-renter.use-case'
import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { z } from 'zod'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  photo: z.string(),
})

type CreateRenterBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/renters')
export class CreateRenterController {
  constructor(private createRenterUseCase: CreateRenterUseCase) {}
  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateRenterBodySchema) {
    const { name, email, phone, photo } = body

    const result = await this.createRenterUseCase.execute({
      name,
      email,
      phone,
      photo,
    })

    if (result.isLeft()) {
      throw new BadRequestException(result.value.message)
    }
  }
}
