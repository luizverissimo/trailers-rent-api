import { TrailersRepository } from '@/domain/renting/application/repositories/trailers-repository'
import { Trailer } from '@/domain/renting/enterprise/entities/trailer'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export class InMemoryTrailersRepository implements TrailersRepository {
  public items: Trailer[] = []

  async create(trailer: Trailer): Promise<void> {
    this.items.push(trailer)
  }

  findById(id: UniqueEntityID): Promise<Trailer | null> {
    const trailer = this.items.filter((item) => item.id.equals(id))

    if (!trailer.length) {
      return null
    }

    return trailer
  }
  update(trailer: Partial<Trailer>): Promise<Trailer> {
    const trailerUpdated = this.items.find((item, index) => {
      if (item.id.equals(trailer.id)) {
        const oldTrailer = this.items[index]
        const newTrailer = { ...oldTrailer, ...trailer }
        this.items[index] = newTrailer
        return newTrailer
      }
    })
    return trailerUpdated
  }
}
