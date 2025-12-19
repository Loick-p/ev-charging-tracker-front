import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { stationService } from "@/services/stationService.ts";
import type { StationForm } from "@/validations/station.ts";

export const useStations = () => {
	const queryClient = useQueryClient();

	const {
		data: stations = [],
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ["stations"],
		queryFn: () => stationService.getAll(),
		select: (data) => data || [],
	});

	const createStationMutation = useMutation({
		mutationFn: (station: StationForm) => stationService.create(station),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["stations"] });
		},
		onError: (error) => {
			console.error("Error creating station:", error);
		},
	});

	const updateStationMutation = useMutation({
		mutationFn: ({ id, station }: { id: number; station: StationForm }) =>
			stationService.update(id, station),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["stations"] });
		},
		onError: (error) => {
			console.error("Error updating station:", error);
		},
	});

	const deleteStationMutation = useMutation({
		mutationFn: (id: number) => stationService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["stations"] });
		},
		onError: (error) => {
			console.error("Error deleting station:", error);
		},
	});

	const createStation = async (station: StationForm) => {
		return await createStationMutation.mutateAsync(station);
	};

	const updateStation = async (id: number, station: StationForm) => {
		return await updateStationMutation.mutateAsync({ id, station });
	};

	const deleteStation = async (id: number) => {
		return await deleteStationMutation.mutateAsync(id);
	};

	return {
		stations,
		isPending,
		isError,
		error,
		createStation,
		updateStation,
		deleteStation,
		isCreating: createStationMutation.isPending,
		isUpdating: updateStationMutation.isPending,
		isDeleting: deleteStationMutation.isPending,
	};
};
