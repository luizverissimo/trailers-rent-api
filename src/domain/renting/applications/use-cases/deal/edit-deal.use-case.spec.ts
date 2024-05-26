import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { EditDealUseCase } from './edit-deal.use-case'
import { InMemoryDealsRepository } from 'test/repositories/in-memory-deals-repository'
import { makeDeal } from 'test/factories/make-deal'

let inMemoryDealsRepository: InMemoryDealsRepository
let sut: EditDealUseCase

describe('Edit a deal', () => {
  beforeEach(() => {
    inMemoryDealsRepository = new InMemoryDealsRepository()
    sut = new EditDealUseCase(inMemoryDealsRepository)
  })

  it("should edit a deal's price", async () => {
    inMemoryDealsRepository.items.push(
      makeDeal({}, new UniqueEntityID('primeiroid'))
    )
    const result = await sut.execute({
      id: 'primeiroid',
      price: 10,
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryDealsRepository.items[0].price).toEqual(10)
  })
})
