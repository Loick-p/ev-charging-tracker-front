import { useQuery } from "@tanstack/react-query"
import { carService } from "@/services/carService"

export const useCars = () => {
    const {
        data: cars = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['cars'],
        queryFn: () => carService.getAll(),
        select: (data) => data || []
    })

    return {
        cars,
        isLoading,
        isError,
        error,
    }
}