import { z } from 'zod'

export const carSchema = z.object({
    id: z.number(),
    brand: z
        .string()
        .min(1, 'Brand is required')
        .max(50, 'Brand must be less than 50 characters'),
    model: z
        .string()
        .min(1, 'Model is required')
        .max(50, 'Model must be less than 50 characters'),
    year: z
        .number()
        .int('Year must be an integer')
        .min(2000, 'Year must be after 2000')
        .max(new Date().getFullYear() + 1, 'Year cannot be in the distant future'),
    range: z
        .number()
        .int('Range must be an integer')
        .min(1, 'Range must be at least 1 km'),
    batteryCapacity: z
        .number()
        .min(1, 'Battery capacity must be at least 1 kWh')
})

export const createCarSchema = carSchema.omit({ id: true })

export type Car = z.infer<typeof carSchema>