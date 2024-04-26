import { Either, left, right } from '@/shared/interfaces/either'
import { Renter } from '../../../models/entities/renter'
import { RentersRepository } from '../../repositories/renters-repository'
import { ResourceNotFoundError } from '@/shared/interfaces/errors/use-case-errors/resource-not-found.error'

interface CreateRenterUseCaseRequest {
  name: string
  email: string
  phone: string
  photo: string
}

type CreateRenterUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    renter: Renter
  }
>

export class CreateRenterUseCase {
  constructor(private rentersRepository: RentersRepository) {}

  async execute({
    name,
    email,
    phone,
    photo,
  }: CreateRenterUseCaseRequest): Promise<CreateRenterUseCaseResponse> {
    if (!name) {
      return left(new ResourceNotFoundError())
    }

    if (!email) {
      return left(new ResourceNotFoundError())
    }
    const renter = Renter.create({
      name,
      email,
      phone,
      photo,
    })

    await this.rentersRepository.create(renter)

    return right({ renter })
  }
}
