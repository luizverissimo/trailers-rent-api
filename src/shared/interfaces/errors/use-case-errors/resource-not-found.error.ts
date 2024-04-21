import { UseCaseError } from '@/shared/interfaces/errors/use-case-errors'

export class ResourceNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Resource not found')
  }
}
