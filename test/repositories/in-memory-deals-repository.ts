import { DealsRepository } from '@/domain/renting/applications/repositories/deals-repository'
import { Deal } from '@/domain/renting/models/entities/deal'

export class InMemoryDealsRepository implements DealsRepository {
  public items: Deal[] = []
  async create(deal: Deal): Promise<void> {
    this.items.push(deal)
  }
}
