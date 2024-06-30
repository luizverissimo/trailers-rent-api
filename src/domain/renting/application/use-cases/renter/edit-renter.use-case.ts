import { Either, left, right } from '@/shared/interfaces/either'
import { Renter } from '../../../enterprise/entities/renter'
import { RentersRepository } from '../../repositories/renters-repository'
import { ResourceNotFoundError } from '@/shared/interfaces/errors/use-case-errors/resource-not-found.error'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

interface EditRenterUseCaseRequest {
  id: string
  name?: string
  email?: string
  phone?: string
  photo?: string
}

type EditRenterUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    renter: Renter
  }
>

export class EditRenterUseCase {
  constructor(private rentersRepository: RentersRepository) {}

  async execute({
    id,
    email,
    name,
    phone,
    photo,
  }: EditRenterUseCaseRequest): Promise<EditRenterUseCaseResponse> {
    if (!id) {
      return left(new ResourceNotFoundError())
    }
    const formatedId = new UniqueEntityID(id)
    const renterDatabase = await this.rentersRepository.findById(formatedId)

    if (!renterDatabase) {
      return left(new ResourceNotFoundError())
    }

    const renter = await this.rentersRepository.update({
      id: formatedId,
      email,
      name,
      phone,
      photo,
    })

    return right({ renter })
  }
}
