import { Tenant } from '../../models/entities/tenant'
import { TenantsRepository } from '../repositories/tenants-repository'

interface CreateTenantUseCaseRequest {
  name: string
  email: string
  phone: string
  photo: string
}

interface CreateTenantUseCaseResponse {
  tenant: Tenant
}

export class CreateTenantUseCase {
  constructor(private rentersRepository: TenantsRepository) {}

  async execute({
    name,
    email,
    phone,
    photo,
  }: CreateTenantUseCaseRequest): Promise<CreateTenantUseCaseResponse> {
    const tenant = Tenant.create({
      name,
      email,
      phone,
      photo,
    })

    await this.rentersRepository.create(tenant)

    return { tenant }
  }
}
