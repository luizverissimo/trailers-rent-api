import { Trailer } from '../../models/entities/trailer'

export interface TrailersRepository {
  create(trailer: Trailer): Promise<void>
}
