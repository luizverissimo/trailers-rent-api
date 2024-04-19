import { Entity } from '@/domain/_interfaces/entities/entity'
import { UniqueEntityID } from '@/domain/_interfaces/entities/unique-entity-id'

export interface TrailersProps {
  tenant_id: UniqueEntityID
  model: string
  brand: string
  description: string
  photo: string
  price_per_day: number
  unavailable: boolean
  latitude: number
  longitude: number
}

export class Trailers<Props extends TrailersProps> extends Entity<Props> {}
