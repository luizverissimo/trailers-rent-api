import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { InMemoryTrailersRepository } from 'test/repositories/in-memory-trailers-repository'
import { CreateTrailerUseCase } from './create-trailer.use-case'

let inMemoryTrailersRepository: InMemoryTrailersRepository
let sut: CreateTrailerUseCase

describe('Create a trailer', () => {
  beforeEach(() => {
    inMemoryTrailersRepository = new InMemoryTrailersRepository()
    sut = new CreateTrailerUseCase(inMemoryTrailersRepository)
  })

  it('should create a trailer', async () => {
    const result = await sut.execute({
      tenantId: 'tenant1',
      model: 'model test',
      brand: 'brand test',
      description: '',
      photo: 'trailer1',
      pricePerDay: 100,
      unavailable: false,
      latitude: -28.7209272,
      longitude: -49.2942842,
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTrailersRepository.items[0].tenantId).toEqual(
      new UniqueEntityID('tenant1')
    )
  })
})
