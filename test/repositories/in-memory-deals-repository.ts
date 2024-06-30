import { DealsRepository } from '@/domain/renting/application/repositories/deals-repository'
import { Deal } from '@/domain/renting/enterprise/entities/deal'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export class InMemoryDealsRepository implements DealsRepository {
  public items: Deal[] = []
  findById(id: UniqueEntityID): Promise<Deal | null> {
    const deal = this.items.filter((item) => item.id.equals(id))

    if (!deal.length) {
      return null
    }

    return deal
  }
  update(deal: Partial<Deal>): Promise<Deal> {
    const dealUpdated = this.items.find((item, index) => {
      if (item.id.equals(deal.id)) {
        const oldDeal = this.items[index]
        const newDeal = { ...oldDeal, ...deal }
        this.items[index] = newDeal
        return newDeal
      }
    })
    return dealUpdated
  }
  async create(deal: Deal): Promise<void> {
    this.items.push(deal)
  }
}
