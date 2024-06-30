import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Deal } from '../../enterprise/entities/deal'

export interface DealsRepository {
  create(deal: Deal): Promise<void>
  findById(id: UniqueEntityID): Promise<Deal | null>
  update(deal: Partial<Deal>): Promise<Deal>
}
