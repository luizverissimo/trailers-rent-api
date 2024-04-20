import { CreateTenantUseCase } from './create-tenant'
import { InMemoryTenantsRepository } from 'test/repositories/in-memory-tenants-repository'

let inMemoryRentersRepository: InMemoryTenantsRepository
let sut: CreateTenantUseCase

describe('Create a tenant', () => {
  beforeEach(() => {
    inMemoryRentersRepository = new InMemoryTenantsRepository()
    sut = new CreateTenantUseCase(inMemoryRentersRepository)
  })

  it('should create a tenant', async () => {
    await sut.execute({
      name: 'luiz',
      email: 'luiz@gmail.com',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(inMemoryRentersRepository.items[0].name).toEqual('luiz')
  })
})
