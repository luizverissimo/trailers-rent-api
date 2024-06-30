import { Entity } from '../../../../shared/interfaces/entities/entity'
import { UniqueEntityID } from '../../../../shared/interfaces/entities/unique-entity-id'

export interface TrailersProps {
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

export class Trailer extends Entity<TrailersProps> {
  get tenantId() {
    return this.props.tenantId
  }

  get model() {
    return this.props.model
  }

  get brand() {
    return this.props.brand
  }

  get description() {
    return this.props.description
  }

  get photo() {
    return this.props.photo
  }

  get pricePerDay() {
    return this.props.pricePerDay
  }

  get unavailable() {
    return this.props.unavailable
  }

  get latitude() {
    return this.props.latitude
  }

  get longitude() {
    return this.props.longitude
  }

  static create(props: TrailersProps, id?: UniqueEntityID) {
    const trailer = new Trailer(
      {
        ...props,
      },
      id
    )

    return trailer
  }
}
