import { Either, left, right } from '@/shared/interfaces/either'
import { Trailer } from '../../../enterprise/entities/trailer'
import { TrailersRepository } from '../../repositories/trailers-repository'
import { ResourceNotFoundError } from '@/shared/interfaces/errors/use-case-errors/resource-not-found.error'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

interface EditTrailerUseCaseRequest {
  id?: string
  tenantId?: UniqueEntityID
  model?: string
  brand?: string
  description?: string
  photo?: string
  pricePerDay?: number
  unavailable?: boolean
  latitude?: number
  longitude?: number
}

type EditTrailerUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    trailer: Trailer
  }
>

export class EditTrailerUseCase {
  constructor(private trailersRepository: TrailersRepository) {}

  async execute({
    id,
    tenantId,
    model,
    brand,
    description,
    photo,
    pricePerDay,
    unavailable,
    latitude,
    longitude,
  }: EditTrailerUseCaseRequest): Promise<EditTrailerUseCaseResponse> {
    if (!id) {
      return left(new ResourceNotFoundError())
    }
    const formatedId = new UniqueEntityID(id)
    const trailerDatabase = await this.trailersRepository.findById(formatedId)

    if (!trailerDatabase) {
      return left(new ResourceNotFoundError())
    }

    const trailer = await this.trailersRepository.update({
      id: formatedId,
      tenantId,
      model,
      brand,
      description,
      photo,
      pricePerDay,
      unavailable,
      latitude,
      longitude,
    })

    return right({ trailer })
  }
}
