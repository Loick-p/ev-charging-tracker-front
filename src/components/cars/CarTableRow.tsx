// UI
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Icons
import { BatteryCharging, Calendar, EllipsisVertical, Milestone } from "lucide-react"

// Types
import type { Car } from "@/types/car"

interface CarTableRowProps {
    car: Car
}

export const CarTableRow = ({ car }: CarTableRowProps) => {
    return (
        <>
            <TableRow className="h-14 text-md">
                <TableCell className="font-medium">{car.brand}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>
                    <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{car.year}</span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="flex items-center">
                        <Milestone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{car.range} km</span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="flex items-center">
                        <BatteryCharging className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{car.batteryCapacity} kWh</span>
                    </div>
                </TableCell>
                <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button
                                variant="ghost"
                                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                            >
                                <EllipsisVertical />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
        </>
    )
}