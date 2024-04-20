import { TraillersRepository } from '@/domain/renting/applications/repositories/traillers-repository'
import { Trailler } from '@/domain/renting/models/entities/trailler'

export class InMemoryTraillersRepository implements TraillersRepository {
  public items: Trailler[] = []

  async create(trailler: Trailler): Promise<void> {
    this.items.push(trailler)
  }
}
