import { Renter } from '../../models/entities'

export interface RentersRepository {
  create(renter: Renter): Promise<void>
}
