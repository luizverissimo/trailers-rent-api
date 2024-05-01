import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Renter } from '../../models/entities/renter'

export interface RentersRepository {
  create(renter: Renter): Promise<void>
  findById(id: UniqueEntityID): Promise<Renter | null>
  update(renter: Partial<Renter>): Promise<Renter>
}
