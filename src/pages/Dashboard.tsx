import { format } from "date-fns";
import { fr as dateFnsFr } from "date-fns/locale";
import {
	Calendar as CalendarIcon,
	Car,
	Euro,
	Eye,
	PlugZap,
	Wallet,
	Zap,
} from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { fr } from "react-day-picker/locale";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table.tsx";
import { cn } from "@/lib/utils.ts";

export const Dashboard = () => {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
	});

	return (
		<div className="p-2 lg:p-4">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-2 justify-between mb-4">
				<h1 className="font-bold text-xl">General overview</h1>

				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className={cn(
								"w-[300px] justify-start text-left font-normal",
								!dateRange && "text-muted-foreground",
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{dateRange?.from ? (
								dateRange.to ? (
									<>
										{format(dateRange.from, "dd/MM/yyyy", {
											locale: dateFnsFr,
										})}{" "}
										-{" "}
										{format(dateRange.to, "dd/MM/yyyy", {
											locale: dateFnsFr,
										})}
									</>
								) : (
									format(dateRange.from, "dd/MM/yyyy", { locale: dateFnsFr })
								)
							) : (
								<span>Pick a date range</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="end">
						<Calendar
							locale={fr}
							mode="range"
							defaultMonth={dateRange?.from}
							selected={dateRange}
							onSelect={setDateRange}
							className="rounded-lg border shadow-sm"
						/>
					</PopoverContent>
				</Popover>
			</div>

			<div className="p-2">
				<div className="grid grid-cols-1 gap-2 xl:grid-cols-3 lg:gap-4 mb-4">
					<Card>
						<CardHeader>
							<CardDescription className="mb-2">
								<PlugZap className="h-10 w-10 text-primary" />
							</CardDescription>
							<CardTitle className="text-muted-foreground font-light">
								Total chargings
							</CardTitle>
						</CardHeader>
						<CardFooter>
							<p className="font-bold text-4xl">26</p>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardDescription className="mb-2">
								<Zap className="h-10 w-10 text-primary" />
							</CardDescription>
							<CardTitle className="text-muted-foreground font-light">
								Total kWh
							</CardTitle>
						</CardHeader>
						<CardFooter>
							<p className="font-bold text-4xl">471 kWh</p>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardDescription className="mb-2">
								<Wallet className="h-10 w-10 text-primary" />
							</CardDescription>
							<CardTitle className="text-muted-foreground font-light">
								Total cost
							</CardTitle>
						</CardHeader>
						<CardFooter>
							<p className="font-bold text-4xl">75.37 €</p>
						</CardFooter>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Latest chargings</CardTitle>
						<CardDescription>The last 5 chargings</CardDescription>
					</CardHeader>
					<CardContent>
						<Table className="overflow-hidden">
							<TableHeader>
								<TableRow>
									<TableHead>Car</TableHead>
									<TableHead>Station</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Total kWh</TableHead>
									<TableHead>Total cost</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow className="h-14 text-md">
									<TableCell>
										<div className="flex items-center">
											<Car className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Tesla Model Y LR</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Home Charger</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>09/10/2025</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>45.2 kWh</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Euro className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>11.30 €</span>
										</div>
									</TableCell>
								</TableRow>
								<TableRow className="h-14 text-md">
									<TableCell>
										<div className="flex items-center">
											<Car className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Tesla Model Y LR</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Home Charger</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>09/10/2025</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>45.2 kWh</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Euro className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>11.30 €</span>
										</div>
									</TableCell>
								</TableRow>
								<TableRow className="h-14 text-md">
									<TableCell>
										<div className="flex items-center">
											<Car className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Tesla Model Y LR</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Home Charger</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>09/10/2025</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>45.2 kWh</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Euro className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>11.30 €</span>
										</div>
									</TableCell>
								</TableRow>
								<TableRow className="h-14 text-md">
									<TableCell>
										<div className="flex items-center">
											<Car className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Tesla Model Y LR</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Home Charger</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>09/10/2025</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>45.2 kWh</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Euro className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>11.30 €</span>
										</div>
									</TableCell>
								</TableRow>
								<TableRow className="h-14 text-md">
									<TableCell>
										<div className="flex items-center">
											<Car className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Tesla Model Y LR</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>Home Charger</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>09/10/2025</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Zap className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>45.2 kWh</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center">
											<Euro className="mr-2 h-4 w-4 text-muted-foreground" />
											<span>11.30 €</span>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
					<CardFooter className="flex justify-center">
						<Button asChild>
							<Link to="chargings">
								<Eye /> View all
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};
