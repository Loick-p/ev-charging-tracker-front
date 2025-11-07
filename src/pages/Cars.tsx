// Components
import { AddCarModal } from "@/components/cars/AddCarModal.tsx"
import { CarsTable } from "@/components/cars/CarsTable.tsx"

export const Cars = () => {
    return (
        <>
            <div className="p-2 lg:p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl">My cars</h1>
                    <AddCarModal />
                </div>

                <CarsTable />
            </div>
        </>
    )
}