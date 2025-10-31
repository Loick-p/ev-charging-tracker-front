// Components
import { CarsTable } from "@/components/cars/CarsTable.tsx"
import { CarFormModal } from "@/components/cars/CarFormModal.tsx"

// UI
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

// Icons
import { Plus } from "lucide-react"

export const Cars = () => {
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

                <CarsTable />
            </div>
        </>
    )
}