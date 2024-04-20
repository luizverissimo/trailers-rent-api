import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Trailler } from '../../models/entities/trailler'
import { TraillersRepository } from '../repositories/traillers-repository'

interface CreateTraillerUseCaseRequest {
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

interface CreateTraillerUseCaseResponse {
  trailler: Trailler
}

export class CreateTraillerUseCase {
  constructor(private traillersRepository: TraillersRepository) {}

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
  }: CreateTraillerUseCaseRequest): Promise<CreateTraillerUseCaseResponse> {
    const trailler = Trailler.create({
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

    await this.traillersRepository.create(trailler)

    return { trailler }
  }
}
