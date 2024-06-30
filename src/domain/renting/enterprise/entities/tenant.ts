import { Entity } from '../../../../shared/interfaces/entities/entity'
import { UniqueEntityID } from '../../../../shared/interfaces/entities/unique-entity-id'

export interface TenantsProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Tenant extends Entity<TenantsProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get phone() {
    return this.props.phone
  }

  get photo() {
    return this.props.photo
  }

  static create(props: TenantsProps, id?: UniqueEntityID) {
    const tenant = new Tenant(
      {
        ...props,
      },
      id
    )

    return tenant
  }
}
