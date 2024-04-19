import { Entity } from '../../../_interfaces/entities/entity'

export interface TenantsProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Tenants<Props extends TenantsProps> extends Entity<Props> {}
