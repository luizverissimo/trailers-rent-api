import { Renter } from '../../models/entities/renter'

export interface RentersRepository {
  create(renter: Renter): Promise<void>
}
