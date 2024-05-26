import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Trailer } from '../../models/entities/trailer'

export interface TrailersRepository {
  create(trailer: Trailer): Promise<void>
  findById(id: UniqueEntityID): Promise<Trailer | null>
  update(trailer: Partial<Trailer>): Promise<Trailer>
}
