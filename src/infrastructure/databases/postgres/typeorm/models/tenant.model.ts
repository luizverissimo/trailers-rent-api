import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tenants' })
export class TenantsModel {
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
