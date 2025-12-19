// Icons
import { Plus } from "lucide-react";
import { useState } from "react";
import { StationModal } from "@/components/stations/StationModal.tsx";
// Components
import { StationsTable } from "@/components/stations/StationsTable.tsx";
// UI
import { Button } from "@/components/ui/button";

export const Stations = () => {
	const [addModalOpen, setAddModalOpen] = useState(false);

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

			<StationModal open={addModalOpen} onOpenChange={setAddModalOpen} />
		</>
	);
};
