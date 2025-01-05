import { RentersRepository } from '@/domain/renting/applications/repositories'
import { Renter } from '@/domain/renting/models/entities'

export class InMemoryRentersRepository implements RentersRepository {
  public items: Renter[] = []
  async create(renter: Renter): Promise<void> {
    this.items.push(renter)
  }
}
