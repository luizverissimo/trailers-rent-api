import { Either, right } from '@/shared/interfaces/either'
import { Tenant } from '../../models/entities/tenant'
import { TenantsRepository } from '../repositories/tenants-repository'

interface CreateTenantUseCaseRequest {
  name: string
  email: string
  phone: string
  photo: string
}

type CreateTenantUseCaseResponse = Either<
  null,
  {
    tenant: Tenant
  }
>

export class CreateTenantUseCase {
  constructor(private tenantsRepository: TenantsRepository) {}

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

    await this.tenantsRepository.create(tenant)

    return right({
      tenant,
    })
  }
}
