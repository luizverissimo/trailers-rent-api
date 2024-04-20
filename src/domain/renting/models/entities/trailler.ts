import { Entity } from '@/shared/interfaces/entities/entity'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export interface TraillersProps {
  tenantId: UniqueEntityID
  model: string
  brand: string
  description: string
  photo: string
  pricePerDay: number
  unavailable: boolean
  latitude: number
  longitude: number
}

export class Trailler extends Entity<TraillersProps> {
  get tenantId() {
    return this.props.tenantId
  }

  static create(props: TraillersProps, id?: UniqueEntityID) {
    const trailler = new Trailler(
      {
        ...props,
      },
      id
    )

    return trailler
  }
}
