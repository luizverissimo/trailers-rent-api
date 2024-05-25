import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { EditRenterUseCase } from './edit-renter.use-case'
import { InMemoryRentersRepository } from 'test/repositories/in-memory-renters-repository'
import { Renter } from '@/domain/renting/models/entities/renter'

let inMemoryRentersRepository: InMemoryRentersRepository
let sut: EditRenterUseCase

describe('Edit a renter', () => {
  beforeEach(() => {
    inMemoryRentersRepository = new InMemoryRentersRepository()
    sut = new EditRenterUseCase(inMemoryRentersRepository)
  })

  it('should edit a renter', async () => {
    inMemoryRentersRepository.items.push(
      Renter.create(
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
    expect(inMemoryRentersRepository.items[0].name).toEqual('luiz verissimo')
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
