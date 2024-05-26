import { Tenant } from '@/domain/renting/models/entities/tenant'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeTenant(
  override: Partial<Tenant> = {},
  id?: UniqueEntityID
) {
  const tenant = Tenant.create(
    {
      name: faker.internet.userName,
      email: faker.internet.email,
      phone: faker.phone.number,
      photo: faker.image.avatar,
      ...override,
    },
    id
  )

  return tenant
}
