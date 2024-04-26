import { CreateRenterUseCase } from './create-renter.use-case'
import { InMemoryRentersRepository } from 'test/repositories/in-memory-renters-repository'

let inMemoryRentersRepository: InMemoryRentersRepository
let sut: CreateRenterUseCase

describe('Create a renter', () => {
  beforeEach(() => {
    inMemoryRentersRepository = new InMemoryRentersRepository()
    sut = new CreateRenterUseCase(inMemoryRentersRepository)
  })

  it('should create a renter', async () => {
    const result = await sut.execute({
      name: 'luiz',
      email: 'luiz@gmail.com',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(result.isRight).toBeTruthy
    expect(inMemoryRentersRepository.items[0].name).toEqual('luiz')
  })

  it('should not create a renter without name', async () => {
    const result = await sut.execute({
      name: '',
      email: 'luiz@gmail.com',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(result.isLeft).toBeTruthy
    expect(inMemoryRentersRepository.items.length).toBe(0)
  })

  it('should not create a renter without email', async () => {
    const result = await sut.execute({
      name: 'luiz',
      email: '',
      phone: '+5548997121754',
      photo: 'user01',
    })

    expect(result.isLeft).toBeTruthy
    expect(inMemoryRentersRepository.items.length).toBe(0)
  })
})
