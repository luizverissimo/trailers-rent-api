import { Entity } from '../../../interfaces/entities/entity'

export interface RentersProps {
  name: string
  email: string
  phone: string
  photo: string
}

export class Renters<Props extends RentersProps> extends Entity<Props> {}
