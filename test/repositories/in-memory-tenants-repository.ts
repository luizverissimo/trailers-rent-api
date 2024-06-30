import { TenantsRepository } from '@/domain/renting/application/repositories/tenants-repository'
import { Tenant } from '@/domain/renting/enterprise/entities/tenant'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

export class InMemoryTenantsRepository implements TenantsRepository {
  public items: Tenant[] = []

  findById(id: UniqueEntityID): Promise<Tenant | null> {
    const tenant = this.items.filter((item) => item.id.equals(id))

    if (!tenant.length) {
      return null
    }

    return tenant
  }
  update(tenant: Partial<Tenant>): Promise<Tenant> {
    const tenantUpdated = this.items.find((item, index) => {
      if (item.id.equals(tenant.id)) {
        const oldTenant = this.items[index]
        const newTenant = { ...oldTenant, ...tenant }
        this.items[index] = newTenant
        return newTenant
      }
    })
    return tenantUpdated
  }

  async create(tenant: Tenant): Promise<void> {
    this.items.push(tenant)
  }
}
