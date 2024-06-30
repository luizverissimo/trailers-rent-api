import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Renter } from '../../enterprise/entities/renter'

export abstract class RentersRepository {
  abstract create(renter: Renter): Promise<void>
  abstract findById(id: UniqueEntityID): Promise<Renter | null>
  abstract update(renter: Partial<Renter>): Promise<Renter>
}
