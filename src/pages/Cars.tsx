import { Plus } from "lucide-react";
import { useState } from "react";
import { CarModal } from "@/components/cars/CarModal.tsx";
// Components
import { CarsTable } from "@/components/cars/CarsTable.tsx";
// UI
import { Button } from "@/components/ui/button";

export const Cars = () => {
	const [addModalOpen, setAddModalOpen] = useState(false);

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

			<CarModal open={addModalOpen} onOpenChange={setAddModalOpen} />
		</>
	);
};
