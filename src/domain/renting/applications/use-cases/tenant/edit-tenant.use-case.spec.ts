import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { EditTenantUseCase } from './edit-tenant.use-case'
import { InMemoryTenantsRepository } from 'test/repositories/in-memory-tenants-repository'
import { Tenant } from '@/domain/renting/models/entities/tenant'

let inMemoryTenantsRepository: InMemoryTenantsRepository
let sut: EditTenantUseCase

describe('Edit a tenant', () => {
  beforeEach(() => {
    inMemoryTenantsRepository = new InMemoryTenantsRepository()
    sut = new EditTenantUseCase(inMemoryTenantsRepository)
  })

  it('should edit a tenant', async () => {
    inMemoryTenantsRepository.items.push(
      Tenant.create(
        {
          name: 'luiz',
          email: 'luiz@gmail.com',
          phone: '+5548997121754',
          photo: 'user01',
        },
        new UniqueEntityID('primeiroid')
      )
    )
    const result = await sut.execute({
      id: 'primeiroid',
      name: 'luiz verissimo',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTenantsRepository.items[0].name).toEqual('luiz verissimo')
  })

  it('should not create a tenant without name', async () => {
    const result = await sut.execute({
      name: '',
      email: 'luiz@gmail.com',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(result.isLeft).toBeTruthy
    expect(inMemoryTenantsRepository.items.length).toBe(0)
  })

  it('should not create a tenant without email', async () => {
    const result = await sut.execute({
      name: 'luiz',
      email: '',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(result.isLeft).toBeTruthy
    expect(inMemoryTenantsRepository.items.length).toBe(0)
  })
})
