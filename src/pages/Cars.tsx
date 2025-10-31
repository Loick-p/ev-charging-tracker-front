import { useState } from "react"

// Components
import { CarsTable } from "@/components/cars/CarsTable.tsx"
import { CarFormModal } from "@/components/cars/CarFormModal.tsx"

// UI
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

// Icons
import { Plus } from "lucide-react"

export const Cars = () => {
    const [addModalOpen, setAddModalOpen] = useState(false)

    return (
        <>
            <div className="p-2 lg:p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">My cars</h1>
                    <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus /> Add car
                            </Button>
                        </DialogTrigger>

                        <CarFormModal
                            onSubmit={() => {
                                setAddModalOpen(false)
                            }}
                        />
                    </Dialog>
                </div>

                <CarsTable />
            </div>
        </>
    )
}