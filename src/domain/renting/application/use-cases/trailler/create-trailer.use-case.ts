import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Trailer } from '../../../enterprise/entities/trailer'
import { TrailersRepository } from '../../repositories/trailers-repository'
import { Either, right } from '@/shared/interfaces/either'

interface CreateTrailerUseCaseRequest {
  tenantId: string
  model: string
  brand: string
  description: string
  photo: string
  pricePerDay: number
  unavailable: boolean
  latitude: number
  longitude: number
}

type CreateTrailerUseCaseResponse = Either<
  null,
  {
    trailer: Trailer
  }
>

export class CreateTrailerUseCase {
  constructor(private trailersRepository: TrailersRepository) {}

  async execute({
    tenantId,
    model,
    brand,
    description,
    photo,
    pricePerDay,
    unavailable,
    latitude,
    longitude,
  }: CreateTrailerUseCaseRequest): Promise<CreateTrailerUseCaseResponse> {
    const trailer = Trailer.create({
      tenantId: new UniqueEntityID(tenantId),
      model,
      brand,
      description,
      photo,
      pricePerDay,
      unavailable,
      latitude,
      longitude,
    })

    await this.trailersRepository.create(trailer)

    return right({ trailer })
  }
}
