import { Either, left, right } from '@/shared/interfaces/either'
import { Tenant } from '../../../enterprise/entities/tenant'
import { TenantsRepository } from '../../repositories/tenants-repository'
import { ResourceNotFoundError } from '@/shared/interfaces/errors/use-case-errors/resource-not-found.error'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

interface EditTenantUseCaseRequest {
  id?: string
  name?: string
  email?: string
  phone?: string
  photo?: string
}

type EditTenantUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    tenant: Tenant
  }
>

export class EditTenantUseCase {
  constructor(private tenantsRepository: TenantsRepository) {}

  async execute({
    id,
    email,
    name,
    phone,
    photo,
  }: EditTenantUseCaseRequest): Promise<EditTenantUseCaseResponse> {
    if (!id) {
      return left(new ResourceNotFoundError())
    }
    const formatedId = new UniqueEntityID(id)
    const tenantDatabase = await this.tenantsRepository.findById(formatedId)

    if (!tenantDatabase) {
      return left(new ResourceNotFoundError())
    }

    const tenant = await this.tenantsRepository.update({
      id: formatedId,
      email,
      name,
      phone,
      photo,
    })

    return right({ tenant })
  }
}
