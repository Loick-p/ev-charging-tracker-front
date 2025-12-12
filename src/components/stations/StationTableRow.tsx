import { useState } from "react"

// Components
import { StationModal } from "@/components/stations/StationModal.tsx"
import { DeleteModal } from "@/components/modals/DeleteModal.tsx"

// UI
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog } from "@/components/ui/dialog"
import { toast } from "sonner"

// Icons
import { EllipsisVertical, Euro, Zap } from "lucide-react"

// Hooks
import { useStations } from "@/hooks/useStations.ts"

// Types
import type { Station } from "@/validations/station"

interface StationTableRowProps {
    station: Station
}

export const StationTableRow = ({ station }: StationTableRowProps) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const { deleteStation, isDeleting } = useStations()

    return (
        <>
            <TableRow className="h-14 text-md">
                <TableCell className="font-medium">{station.name}</TableCell>
                <TableCell>
                    <div className="flex items-center">
                        <Zap className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{station.outputPower} kW</span>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="flex items-center">
                        <Euro className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{station.electricityPrice} €/kWh</span>
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
                            <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive" onClick={() => setDeleteModalOpen(true)}>
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>

            <StationModal
                station={station}
                open={editModalOpen}
                onOpenChange={setEditModalOpen}
            />

            <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
                <DeleteModal
                    title="Delete this station ?"
                    description={`Are you sure you want to delete station ${station.name} ? This action cannot be undone.`}
                    onDelete={async () => {
                        try {
                            await deleteStation(station.id)

                            toast.success("Station has been deleted successfully.")
                            setDeleteModalOpen(false)
                        } catch (error) {
                            toast.error('An error occurred while deleting the station. Please try again.')

                            console.error('Failed to delete station : ', error)
                        }
                    }}
                    isLoading={isDeleting}
                />
            </Dialog>
        </>
    )
}