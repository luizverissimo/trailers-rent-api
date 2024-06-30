import { InMemoryDealsRepository } from 'test/repositories/in-memory-deals-repository'
import { CreateDealUseCase } from './create-deal.use-case'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'

describe('Create a deal', () => {
  let inMemoryDealsRepository: InMemoryDealsRepository
  let sut: CreateDealUseCase
  beforeEach(() => {
    inMemoryDealsRepository = new InMemoryDealsRepository()
    sut = new CreateDealUseCase(inMemoryDealsRepository)
  })

  it('should create a deal', async () => {
    const result = await sut.execute({
      tenantId: 'tenant-01',
      renterId: 'reter-01',
      price: 10,
      startDate: new Date(),
      endDate: new Date(),
      assignedTenant: new Date(),
      assignedRenter: new Date(),
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryDealsRepository.items[0].tenantId).toEqual(
      new UniqueEntityID('tenant-01')
    )
  })
})
