import { TenantsRepository } from '@/domain/renting/applications/repositories/tenants-repository'
import { Tenant } from '@/domain/renting/models/entities/tenant'

export class InMemoryTenantsRepository implements TenantsRepository {
  public items: Tenant[] = []

  async create(tenant: Tenant): Promise<void> {
    this.items.push(tenant)
  }
}
