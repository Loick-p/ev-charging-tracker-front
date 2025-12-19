import axiosInstance from "@/lib/axios";
import type { Station, StationForm } from "@/validations/station";

export const stationService = {
	getAll: async (): Promise<Station[]> => {
		const response = await axiosInstance.get("stations");
		return response.data;
	},
	create: async (station: StationForm): Promise<Station> => {
		const response = await axiosInstance.post("stations", station);
		return response.data;
	},
	update: async (id: number, station: StationForm): Promise<Station> => {
		const response = await axiosInstance.patch(`stations/${id}`, station);
		return response.data;
	},
	delete: async (id: number): Promise<void> => {
		await axiosInstance.delete(`stations/${id}`);
	},
};
