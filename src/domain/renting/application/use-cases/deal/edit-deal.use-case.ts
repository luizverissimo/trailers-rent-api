import { Either, left, right } from '@/shared/interfaces/either'
import { DealsRepository } from '../../repositories/deals-repository'
import { ResourceNotFoundError } from '@/shared/interfaces/errors/use-case-errors/resource-not-found.error'
import { Deal } from '@/domain/renting/enterprise/entities/deal'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

interface EditDealUseCaseRequest {
  id: string
  tenantId?: string
  renterId?: string
  startDate?: Date
  endDate?: Date
  price?: number
  assignedTenant?: Date
  assignedRenter?: Date
}

type EditDealUseCaseResponse = Either<ResourceNotFoundError, { deal: Deal }>

export class EditDealUseCase {
  constructor(private dealsRepository: DealsRepository) {}

  async execute({
    id,
    tenantId,
    renterId,
    startDate,
    endDate,
    price,
    assignedRenter,
    assignedTenant,
  }: EditDealUseCaseRequest): Promise<EditDealUseCaseResponse> {
    if (!id) {
      return left(new ResourceNotFoundError())
    }

    const formatedId = new UniqueEntityID(id)
    const dealsDatabase = await this.dealsRepository.findById(formatedId)

    if (!dealsDatabase) {
      return left(new ResourceNotFoundError())
    }
    const deal = await this.dealsRepository.update({
      id: formatedId,
      tenantId: new UniqueEntityID(tenantId),
      renterId: new UniqueEntityID(renterId),
      startDate,
      endDate,
      price,
      assignedRenter,
      assignedTenant,
    })

    return right({ deal })
  }
}
