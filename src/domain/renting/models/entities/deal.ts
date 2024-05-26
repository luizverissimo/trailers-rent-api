import { Entity } from '@/shared/interfaces/entities/entity'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export interface DealsProps {
  tenantId: UniqueEntityID
  renterId: UniqueEntityID
  startDate: Date
  endDate: Date
  price: number
  assignedTenant: Date
  assignedRenter: Date
}

export class Deal extends Entity<DealsProps> {
  static create(props: DealsProps, id?: UniqueEntityID) {
    const deal = new Deal({ ...props }, id)
    return deal
  }

  get tenantId() {
    return this.props.tenantId
  }

  get renterId() {
    return this.props.renterId
  }

  get startDate() {
    return this.props.startDate
  }

  get endDate() {
    return this.props.endDate
  }

  get price() {
    return this.props.price
  }

  get assignedTenant() {
    return this.props.assignedTenant
  }

  get assignedRenter() {
    return this.props.assignedRenter
  }
}
