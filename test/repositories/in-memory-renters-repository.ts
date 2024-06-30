import { RentersRepository } from '@/domain/renting/application/repositories/renters-repository'
import { Renter } from '@/domain/renting/enterprise/entities/renter'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export class InMemoryRentersRepository implements RentersRepository {
  public items: Renter[] = []

  findById(id: UniqueEntityID): Promise<Renter | null> {
    const renter = this.items.filter((item) => item.id.equals(id))

    if (!renter.length) {
      return null
    }

    return renter
  }
  update(renter: Partial<Renter>): Promise<Renter> {
    const renterUpdated = this.items.find((item, index) => {
      if (item.id.equals(renter.id)) {
        const oldRenter = this.items[index]
        const newRenter = { ...oldRenter, ...renter }
        this.items[index] = newRenter
        return newRenter
      }
    })
    return renterUpdated
  }
  async create(renter: Renter): Promise<void> {
    this.items.push(renter)
  }
}
