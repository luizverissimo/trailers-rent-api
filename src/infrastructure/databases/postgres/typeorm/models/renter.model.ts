import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'renters' })
export class RentersModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'phone' })
  phone: string

  @Column({ name: 'photo' })
  photo: string
}
