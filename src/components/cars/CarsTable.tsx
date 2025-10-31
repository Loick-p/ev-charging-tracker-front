// Components
import { CarTableRow } from "@/components/cars/CarTableRow.tsx"

// UI
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

// Hooks
import { useCars } from "@/hooks/useCars"

// Types
import type { Car } from "@/types/car"

export const CarsTable = () => {
    const { cars, isLoading, isError } = useCars();

    return (
        <>
            <div className="overflow-hidden rounded-lg border my-4">
                <Table>
                    <TableHeader className="bg-muted">
                        <TableRow>
                            <TableHead>Brand</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead>Range</TableHead>
                            <TableHead>Battery capacity</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <TableRow className="h-14" key={index}>
                                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                                </TableRow>
                            ))
                        ) : isError ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                                    Error loading cars. Please try again later.
                                </TableCell>
                            </TableRow>
                        ) : !cars || cars.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                                    No cars
                                </TableCell>
                            </TableRow>
                        ) : (
                            cars.map((car: Car) => (
                                <CarTableRow key={car.id} car={car} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}