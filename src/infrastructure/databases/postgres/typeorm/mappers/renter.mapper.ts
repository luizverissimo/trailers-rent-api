import { Renter } from '@/domain/renting/enterprise/entities/renter'

export class TypeormRentersMapper {
  static toDomain(raw) {
    const renter = Renter.create({
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      photo: raw.photo,
    })
    return {
      id: renter.id.toString(),
      name: renter.name,
      email: renter.email,
      phone: renter.phone,
      photo: renter.photo,
    }
  }
}
