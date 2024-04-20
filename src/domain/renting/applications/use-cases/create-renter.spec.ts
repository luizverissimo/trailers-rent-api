import { CreateRenterUseCase } from './create-renter'
import { InMemoryRentersRepository } from 'test/repositories/in-memory-renters-repository'

let inMemoryRentersRepository: InMemoryRentersRepository
let sut: CreateRenterUseCase

describe('Create a renter', () => {
  beforeEach(() => {
    inMemoryRentersRepository = new InMemoryRentersRepository()
    sut = new CreateRenterUseCase(inMemoryRentersRepository)
  })
  it('should create a renter', async () => {
    await sut.execute({
      name: 'luiz',
      email: 'luiz@gmail.com',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(inMemoryRentersRepository.items[0].name).toEqual('luiz')
  })
})
