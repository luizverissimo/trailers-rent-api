import { Entity } from '@/domain/_interfaces/entities/entity'
import { UniqueEntityID } from '@/domain/_interfaces/entities/unique-entity-id'

export interface RentersProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Renter extends Entity<RentersProps> {
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
