import { TrailersRepository } from '@/domain/renting/applications/repositories/trailers-repository'
import { Trailer } from '@/domain/renting/models/entities/trailer'

export class InMemoryTrailersRepository implements TrailersRepository {
  public items: Trailer[] = []

  async create(trailer: Trailer): Promise<void> {
    this.items.push(trailer)
  }
}
