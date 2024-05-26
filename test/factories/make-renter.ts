import { Renter } from '@/domain/renting/models/entities/renter'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeRenter(
  override: Partial<Renter> = {},
  id?: UniqueEntityID
) {
  const renter = Renter.create(
    {
      name: faker.internet.userName,
      email: faker.internet.email,
      phone: faker.phone.number,
      photo: faker.image.avatar,
      ...override,
    },
    id
  )

  return renter
}
