import { Deal } from '../../models/entities/deal'

export interface DealsRepository {
  create(deal: Deal): Promise<void>
}
