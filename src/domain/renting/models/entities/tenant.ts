import { Entity } from '@/domain/_interfaces/entities/entity'

export interface TenantsProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Tenant extends Entity<TenantsProps> {}
