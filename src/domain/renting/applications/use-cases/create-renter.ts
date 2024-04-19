import { Renter } from '../../models/entities/renter'
import { RentersRepository } from '../repositories/renters-repository'

interface CreateRenterUseCaseRequest {
  name: string
  email: string
  phone: string
  photo: string
}

interface CreateRenterUseCaseResponse {
  renter: Renter
}

export class CreateRenterUseCase {
  constructor(private renterRepository: RentersRepository) {}

  async execute({
    name,
    email,
    phone,
    photo,
  }: CreateRenterUseCaseRequest): Promise<CreateRenterUseCaseResponse> {
    const renter = Renter.create({
      name,
      email,
      phone,
      photo,
    })

    await this.renterRepository.create(renter)

    return { renter }
  }
}
