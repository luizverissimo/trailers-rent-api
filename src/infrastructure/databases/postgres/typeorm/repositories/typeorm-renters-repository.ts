import { RentersRepository } from '@/domain/renting/application/repositories/renters-repository'
import { Renter } from '@/domain/renting/enterprise/entities/renter'
import { UniqueEntityID } from '@/shared/interfaces/entities/unique-entity-id'
import { RentersModel } from '../models/renter.model'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TypeormRentersRepository implements RentersRepository {
  constructor(
    @InjectRepository(RentersModel)
    private repository: Repository<RentersModel>
  ) {}

  async create(renter: Renter): Promise<void> {
    await this.repository.save(renter)
  }
  async findById(id: UniqueEntityID): Promise<Renter | null> {
    return await this.repository.findOneBy({ id })
  }
  async update(renter: Partial<Renter>): Promise<Renter> {
    await this.repository.update(renter.id.toString(), renter)
    return await this.findById(renter.id)
  }
}
