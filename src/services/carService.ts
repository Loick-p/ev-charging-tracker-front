import axiosInstance from "@/lib/axios"
import type { Car } from "@/types/car"

export const carService = {
    getAll: async (): Promise<Car[]> => {
        const response = await axiosInstance.get('cars')

        return response.data
    },
}