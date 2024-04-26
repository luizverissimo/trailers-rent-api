import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { CreateTraillerUseCase } from './create-trailler.use-case'
import { InMemoryTraillersRepository } from 'test/repositories/in-memory-traillers-repository'

let inMemoryTraillersRepository: InMemoryTraillersRepository
let sut: CreateTraillerUseCase

describe('Create a Trailler', () => {
  beforeEach(() => {
    inMemoryTraillersRepository = new InMemoryTraillersRepository()
    sut = new CreateTraillerUseCase(inMemoryTraillersRepository)
  })

  it('should create a Trailler', async () => {
    const result = await sut.execute({
      tenantId: 'tenant1',
      model: 'model test',
      brand: 'brand test',
      description: '',
      photo: 'trailler1',
      pricePerDay: 100,
      unavailable: false,
      latitude: -28.7209272,
      longitude: -49.2942842,
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTraillersRepository.items[0].tenantId).toEqual(
      new UniqueEntityID('tenant1')
    )
  })
})
