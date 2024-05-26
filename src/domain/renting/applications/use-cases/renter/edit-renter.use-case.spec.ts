import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { EditRenterUseCase } from './edit-renter.use-case'
import { InMemoryRentersRepository } from 'test/repositories/in-memory-renters-repository'
import { makeRenter } from 'test/factories/make-renter'

let inMemoryRentersRepository: InMemoryRentersRepository
let sut: EditRenterUseCase

describe('Edit a renter', () => {
  beforeEach(() => {
    inMemoryRentersRepository = new InMemoryRentersRepository()
    sut = new EditRenterUseCase(inMemoryRentersRepository)
  })

  it("should edit a renter's name", async () => {
    inMemoryRentersRepository.items.push(
      makeRenter({}, new UniqueEntityID('primeiroid'))
    )
    const result = await sut.execute({
      id: 'primeiroid',
      name: 'luiz verissimo',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryRentersRepository.items[0].name).toEqual('luiz verissimo')
  })

  it("should edit a renter's email", async () => {
    inMemoryRentersRepository.items.push(
      makeRenter({}, new UniqueEntityID('primeiroid'))
    )

    const result = await sut.execute({
      id: 'primeiroid',
      email: 'luiz@gmail.com',
    })

    expect(result.isLeft).toBeTruthy
    expect(inMemoryRentersRepository.items[0].email).toEqual('luiz@gmail.com')
  })
})
