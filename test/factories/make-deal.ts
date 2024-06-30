import { Deal } from '@/domain/renting/enterprise/entities/deal'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeDeal(override: Partial<Deal> = {}, id?: UniqueEntityID) {
  const deal = Deal.create(
    {
      tenantId: new UniqueEntityID(),
      renterId: new UniqueEntityID(),
      startDate: faker.date.anytime,
      endDate: faker.date.anytime,
      price: faker.finance.amount,
      assignedTenant: faker.date.anytime,
      assignedRenter: faker.date.anytime,
      ...override,
    },
    id
  )

  return deal
}
