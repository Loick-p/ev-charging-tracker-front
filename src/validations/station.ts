import { z } from 'zod'

const stationBaseSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .max(50, 'Name must be less than 50 characters'),
    outputPower: z
        .number()
        .gte(1, 'Output power must be at least 1 kW')
        .lte(100, 'Output power must be less than or equal to 1000 kW'),
    electricityPrice: z
        .number()
        .gte(0.01, 'Output power must be at least 0.01 €/kWh')
        .lte(10, 'Output power must be less than or equal to 10 €/kWh')
})

export const stationFormSchema = stationBaseSchema
export const stationSchema = stationBaseSchema.extend({
    id: z.number()
})

export type Station = z.infer<typeof stationSchema>
export type StationForm = z.infer<typeof stationFormSchema>