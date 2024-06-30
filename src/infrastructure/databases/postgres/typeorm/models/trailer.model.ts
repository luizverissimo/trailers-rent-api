import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'trailers' })
export class TrailersModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'tenant-id', type: 'text' })
  tenantId: string

  @Column({ name: 'model' })
  model: string

  @Column({ name: 'brand' })
  brand: string

  @Column({ name: 'description' })
  description: string

  @Column({ name: 'photo' })
  photo: string

  @Column({ name: 'pricePerDay' })
  pricePerDay: number

  @Column({ name: 'unavailable' })
  unavailable: boolean

  @Column({ name: 'latitude' })
  latitude: number

  @Column({ name: 'longitude' })
  longitude: number
}
