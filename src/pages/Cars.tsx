import { useState } from "react"

// Components
import { CarsTable } from "@/components/cars/CarsTable.tsx"
import { CarModal } from "@/components/cars/CarModal.tsx"

// UI
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const Cars = () => {
    const [addModalOpen, setAddModalOpen] = useState(false)

    return (
        <>
            <div className="p-2 lg:p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">My cars</h1>

                    <Button onClick={() => setAddModalOpen(true)}>
                        <Plus /> Add car
                    </Button>
                </div>

                <CarsTable />
            </div>

            <CarModal
                open={addModalOpen}
                onOpenChange={setAddModalOpen}
            />
        </>
    )
}