import axiosInstance from "@/lib/axios";
import type { Car, CarForm } from "@/validations/car";

export const carService = {
	getAll: async (): Promise<Car[]> => {
		const response = await axiosInstance.get("cars");
		return response.data;
	},
	create: async (car: CarForm): Promise<Car> => {
		const response = await axiosInstance.post("cars", car);
		return response.data;
	},
	update: async (id: number, car: CarForm): Promise<Car> => {
		const response = await axiosInstance.patch(`cars/${id}`, car);
		return response.data;
	},
	delete: async (id: number): Promise<void> => {
		await axiosInstance.delete(`cars/${id}`);
	},
};
