import { Entity } from '@/shared/interfaces/entities/entity'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export interface DealsProps {
  tenant_id: UniqueEntityID
  renter_id: UniqueEntityID
  start_date: Date
  end_date: Date
  price: number
  assign_tenant: Date
  assign_renter: Date
}

export class Deal extends Entity<DealsProps> {}
