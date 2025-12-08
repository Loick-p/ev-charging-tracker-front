import { z } from 'zod'

const carBaseSchema = z.object({
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
        .gte(2000, 'Year must be after 2000')
        .lte(new Date().getFullYear() + 1, 'Year cannot be in the distant future'),
    range: z
        .number()
        .int('Range must be an integer')
        .gte(1, 'Range must be at least 1 km')
        .lte(2000, 'Range must be less than or equal to 2000 km'),
    batteryCapacity: z
        .number()
        .gte(1, 'Battery capacity must be at least 1 kWh')
        .lte(500, 'Battery capacity must be less than or equal to 500 kWh')
})

export const carFormSchema = carBaseSchema
export const carSchema = carBaseSchema.extend({
    id: z.number()
})

export type Car = z.infer<typeof carSchema>
export type CarForm = z.infer<typeof carFormSchema>