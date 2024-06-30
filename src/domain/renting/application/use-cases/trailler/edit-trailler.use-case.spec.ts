import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { InMemoryTrailersRepository } from 'test/repositories/in-memory-trailers-repository'
import { makeTrailer } from 'test/factories/make-trailer'
import { EditTrailerUseCase } from './edit-trailler.use-case'

let inMemoryTrailersRepository: InMemoryTrailersRepository
let sut: EditTrailerUseCase

describe('Edit a trailer', () => {
  beforeEach(() => {
    inMemoryTrailersRepository = new InMemoryTrailersRepository()
    sut = new EditTrailerUseCase(inMemoryTrailersRepository)
  })

  it("should edit a trailer's brand", async () => {
    inMemoryTrailersRepository.items.push(
      makeTrailer({}, new UniqueEntityID('primeiroid'))
    )
    const result = await sut.execute({
      id: 'primeiroid',
      brand: 'Toyota',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryTrailersRepository.items[0].brand).toEqual('Toyota')
  })
})
