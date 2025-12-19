import { Button } from "@/components/ui/button";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const ChargingFormModal = () => {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Add new charging</DialogTitle>
				<DialogDescription>
					Fill the information of your charging session.
				</DialogDescription>
			</DialogHeader>

			<div className="grid gap-4">
				<div className="grid gap-3">
					<Label htmlFor="car" className="flex gap-1">
						Car
						<span className="text-red-500">*</span>
					</Label>
					<Select name="car" required>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a car" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="tmy">Tesla Model Y LR</SelectItem>
								<SelectItem value="tm3">Tesla Model 3</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="station" className="flex gap-1">
						Station
						<span className="text-red-500">*</span>
					</Label>
					<Select name="station" required>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a station" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="home-charger">Home Charger</SelectItem>
								<SelectItem value="tesla-supercharger">
									Tesla Supercharger
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="date" className="flex gap-1">
						Date
						<span className="text-red-500">*</span>
					</Label>
					<Input id="date" name="date" type="date" required />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="total_kwh" className="flex gap-1">
						Total kWh
						<span className="text-red-500">*</span>
					</Label>
					<InputGroup>
						<InputGroupInput
							id="total_kwh"
							name="total_kwh"
							type="number"
							min="0.1"
							step="0.1"
							placeholder="45.2"
							required
						/>
						<InputGroupAddon align="inline-end">
							<InputGroupText>kWh</InputGroupText>
						</InputGroupAddon>
					</InputGroup>
				</div>
			</div>

			<DialogFooter>
				<DialogClose asChild>
					<Button variant="outline">Cancel</Button>
				</DialogClose>

				<Button type="submit">Add</Button>
			</DialogFooter>
		</DialogContent>
	);
};
