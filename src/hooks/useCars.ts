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

    const updateCarMutation = useMutation({
        mutationFn: ({ id, car }: { id: number; car: CarForm }) => carService.update(id, car),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cars'] })
        },
        onError: (error) => {
            console.error('Error updating car:', error)
        },
    })

    const createCar = async (car: CarForm) => {
        return await createCarMutation.mutateAsync(car)
    }

    const updateCar = async (id: number, car: CarForm) => {
        return await updateCarMutation.mutateAsync({ id, car })
    }

    return {
        cars,
        isPending,
        isError,
        error,
        createCar,
        updateCar,
        isCreating: createCarMutation.isPending,
        isUpdating: updateCarMutation.isPending,
    }
}