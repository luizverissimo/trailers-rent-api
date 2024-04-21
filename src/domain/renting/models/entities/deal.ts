import { Entity } from '@/shared/interfaces/entities/entity'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export interface DealsProps {
  tenantId: UniqueEntityID
  renterId: UniqueEntityID
  startDate: Date
  endDate: Date
  price: number
  assignedTenant: Date
  assignRenter: Date
}

export class Deal extends Entity<DealsProps> {
  get tenantId() {
    return this.props.tenantId
  }
  static create(props: DealsProps, id?: UniqueEntityID) {
    const deal = new Deal({ ...props }, id)
    return deal
  }
}
