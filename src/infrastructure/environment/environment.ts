import { z } from 'zod'

export const environmentSchema = z.object({
  APP_PORT: z.coerce.number().optional().default(3000),
})

export type Environment = z.infer<typeof environmentSchema>
