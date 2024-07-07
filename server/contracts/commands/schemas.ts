import { z } from 'zod'

const createResponseSchema = <T>(dataSchema: z.ZodType<T>) =>
  z.object({
    statusCode: z.number(),
    message: z.string(),
    endpoint: z.string(),
    data: dataSchema
  })

// Sigup

export const SigupRequestSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const SigupDataSchema = z.object({})

const SigupResponseSchema = createResponseSchema(SigupDataSchema)

export type SigupRequest = z.infer<typeof SigupRequestSchema>
export type SigupResponse = z.infer<typeof SigupResponseSchema>

// Sigin

export const SiginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

const SiginDstaSchema = z.object({
  accessToken: z.string()
})

export const SiginResponeSchema = createResponseSchema(SiginDstaSchema)

export type SiginRequest = z.infer<typeof SiginRequestSchema>
export type SiginResponse = z.infer<typeof SiginResponeSchema>
