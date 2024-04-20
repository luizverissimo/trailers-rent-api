import { Entity } from '@/shared/interfaces/entities/entity'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export interface RentersProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Renter extends Entity<RentersProps> {
  get name() {
    return this.props.name
  }

  static create(props: RentersProps, id?: UniqueEntityID) {
    const renter = new Renter(
      {
        ...props,
      },
      id
    )

    return renter
  }
}
