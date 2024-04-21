import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id.js'
import { Deal } from '../../models/entities/deal.js'
import { DealsRepository } from '../repositories/deals-repository.js'

interface DealUseCaseRequest {
  tenantId: string
  renterId: string
  startDate: Date
  endDate: Date
  price: number
  assignedTenant: Date
  assignedRenter: Date
}

interface DealUseCaseResponse {
  deal: Deal
}

export class CreateDealUseCase {
  constructor(private dealsRepository: DealsRepository) {}
  async execute({
    tenantId,
    renterId,
    startDate,
    endDate,
    price,
    assignedTenant,
    assignedRenter,
  }: DealUseCaseRequest): Promise<DealUseCaseResponse> {
    const deal = Deal.create({
      tenantId: new UniqueEntityID(tenantId),
      renterId: new UniqueEntityID(renterId),
      startDate,
      endDate,
      price,
      assignedTenant,
      assignedRenter,
    })

    this.dealsRepository.create(deal)

    return { deal }
  }
}
