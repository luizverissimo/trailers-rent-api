import { Trailler } from '../../models/entities/trailler'

export interface TraillersRepository {
  create(trailler: Trailler): Promise<void>
}
