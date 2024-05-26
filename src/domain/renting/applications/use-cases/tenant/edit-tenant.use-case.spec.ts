import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { EditTenantUseCase } from './edit-tenant.use-case'
import { InMemoryTenantsRepository } from 'test/repositories/in-memory-tenants-repository'
import { makeTenant } from 'test/factories/make-tenant'

let inMemoryTenantsRepository: InMemoryTenantsRepository
let sut: EditTenantUseCase

describe('Edit a tenant', () => {
  beforeEach(() => {
    inMemoryTenantsRepository = new InMemoryTenantsRepository()
    sut = new EditTenantUseCase(inMemoryTenantsRepository)
  })

  it("should edit a tenant's name", async () => {
    inMemoryTenantsRepository.items.push(
      makeTenant({}, new UniqueEntityID('primeiroid'))
    )
    const result = await sut.execute({
      id: 'primeiroid',
      name: 'luiz verissimo',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTenantsRepository.items[0].name).toEqual('luiz verissimo')
  })

  it("should edit a tenant's email", async () => {
    inMemoryTenantsRepository.items.push(
      makeTenant({}, new UniqueEntityID('primeiroid'))
    )
    const result = await sut.execute({
      id: 'primeiroid',
      email: 'luiz@gmail.com',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTenantsRepository.items[0].email).toEqual('luiz@gmail.com')
  })
})
