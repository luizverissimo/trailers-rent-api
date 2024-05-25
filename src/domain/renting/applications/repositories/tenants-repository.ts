import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { Tenant } from '../../models/entities/tenant'

export interface TenantsRepository {
  create(tenant: Tenant): Promise<void>
  findById(id: UniqueEntityID): Promise<Tenant | null>
  update(tenant: Partial<Tenant>): Promise<Tenant>
}
