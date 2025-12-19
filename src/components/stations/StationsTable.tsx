// Components
import { StationTableRow } from "@/components/stations/StationTableRow.tsx";
import { Skeleton } from "@/components/ui/skeleton";
// UI
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Hooks
import { useStations } from "@/hooks/useStations.ts";

// Type
import type { Station } from "@/validations/station.ts";

export const StationsTable = () => {
	const { stations, isPending, isError } = useStations();

	return (
		<div className="overflow-hidden rounded-lg border my-4">
			<Table>
				<TableHeader className="bg-muted">
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Output power</TableHead>
						<TableHead>Electricity price</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{isPending ? (
						[...Array(5).keys()].map((id) => (
							<TableRow className="h-14" key={id}>
								<TableCell>
									<Skeleton className="h-4 w-24" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-16" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-8 w-8" />
								</TableCell>
							</TableRow>
						))
					) : isError ? (
						<TableRow>
							<TableCell
								colSpan={6}
								className="text-center py-4 text-muted-foreground"
							>
								Error loading stations. Please try again later.
							</TableCell>
						</TableRow>
					) : !stations || stations.length === 0 ? (
						<TableRow>
							<TableCell
								colSpan={6}
								className="text-center py-4 text-muted-foreground"
							>
								No stations
							</TableCell>
						</TableRow>
					) : (
						stations.map((station: Station) => (
							<StationTableRow key={station.id} station={station} />
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
};
