import { useState } from "react"

// Components
import { StationsTable } from "@/components/stations/StationsTable.tsx"
import { StationModal } from "@/components/stations/StationModal.tsx"

// UI
import { Button } from "@/components/ui/button"

// Icons
import { Plus } from "lucide-react"

export const Stations = () => {
    const [addModalOpen, setAddModalOpen] = useState(false)

    return (
        <>
            <div className="p-2 lg:p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">My stations</h1>

                    <Button onClick={() => setAddModalOpen(true)}>
                        <Plus /> Add station
                    </Button>
                </div>

                <StationsTable />
            </div>

            <StationModal
                open={addModalOpen}
                onOpenChange={setAddModalOpen}
            />
        </>
    )
}