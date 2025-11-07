import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { carService } from "@/services/carService"
import type { CarForm } from "@/validations/car.ts"

export const useCars = () => {
    const queryClient = useQueryClient()

    const {
        data: cars = [],
        isPending,
        isError,
        error
    } = useQuery({
        queryKey: ['cars'],
        queryFn: () => carService.getAll(),
        select: (data) => data || []
    })

    const createCarMutation = useMutation({
        mutationFn: (car: CarForm) => carService.create(car),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cars'] })
        },
        onError: (error) => {
            console.error('Error creating car:', error)
        },
    })

    const createCar = async (car: CarForm) => {
        return await createCarMutation.mutateAsync(car)
    }

    return {
        cars,
        isPending,
        isError,
        error,
        createCar,
        isCreating: createCarMutation.isPending,
    }
}