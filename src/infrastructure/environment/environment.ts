import { z } from 'zod'

export const environmentSchema = z.object({
  APP_PORT: z.coerce.number().optional().default(3000),
  RENTING_DATABASE_NAME: z.string(),
  RENTING_DATABASE_HOST: z.string(),
  RENTING_DATABASE_PORT: z.coerce.number().optional().default(5432),
  RENTING_DATABASE_USER: z.string(),
  RENTING_DATABASE_PASSWORD: z.string(),
  RENTING_DATABASE_SCHEMA: z.string(),
})

export type Environment = z.infer<typeof environmentSchema>
