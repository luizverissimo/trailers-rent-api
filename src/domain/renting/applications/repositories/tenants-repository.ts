import { Tenant } from '../../models/entities/tenant'

export interface TenantsRepository {
  create(tenant: Tenant): Promise<void>
}
