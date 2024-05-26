import { Trailer } from '@/domain/renting/models/entities/trailer'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeTrailer(
  override: Partial<Trailer> = {},
  id?: UniqueEntityID
) {
  const trailer = Trailer.create(
    {
      tenantId: new UniqueEntityID(),
      model: faker.lorem.word,
      brand: faker.lorem.word,
      description: faker.lorem.text,
      photo: faker.image.avatar,
      pricePerDay: faker.finance.amount,
      unavailable: true,
      latitude: faker.location.latitude,
      longitude: faker.location.latitude,
      ...override,
    },
    id
  )

  return trailer
}
