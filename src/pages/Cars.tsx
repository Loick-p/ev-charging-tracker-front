import { useState } from "react"

// Components
import { CarFormModal } from "@/components/cars/CarFormModal.tsx"
import { DeleteModal } from "@/components/modals/DeleteModal.tsx"

// UI
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"

// Icons
import { BatteryCharging, Calendar, EllipsisVertical, Milestone, Plus } from "lucide-react"

export const Cars = () => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    return (
        <>
            <div className="p-2 lg:p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">My cars</h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus /> Add car
                            </Button>
                        </DialogTrigger>

                        <CarFormModal />
                    </Dialog>
                </div>

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
                            <TableRow className="h-14 text-md">
                                <TableCell className="font-medium">Tesla</TableCell>
                                <TableCell>Model Y LR</TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>2025</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Milestone className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>530 km</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <BatteryCharging className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>78 kWh</span>
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
                        </TableBody>
                    </Table>
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
                <CarFormModal />
            </Dialog>

            <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
                <DeleteModal
                    title="Delete this car ?"
                    description="Are you sure you want to delete this car? This action cannot be undone."
                    onDelete={() => {
                        setDeleteModalOpen(false)
                    }}
                    deleteButtonText="Delete Car"
                />
            </Dialog>
        </>
    )
}