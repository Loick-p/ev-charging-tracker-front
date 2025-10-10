import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const StationFormModal = () => {
    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new station</DialogTitle>
                    <DialogDescription>
                        Fill the information of your charging station.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name" className="flex gap-1">
                            Name
                            <span className="text-red-500">*</span>
                        </Label>
                        <Input id="name" name="name" placeholder="Home Charger" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="output_power" className="flex gap-1">
                            Output power
                            <span className="text-red-500">*</span>
                        </Label>
                        <InputGroup>
                            <InputGroupInput id="output_power" name="output_power" type="number" min="0.1" step="0.1" placeholder="7.4" required />
                            <InputGroupAddon align="inline-end">
                                <InputGroupText>kW</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="electricity_price" className="flex gap-1">
                            Electricity price
                            <span className="text-red-500">*</span>
                        </Label>
                        <InputGroup>
                            <InputGroupAddon align="inline-start">
                                <InputGroupText>€</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupInput id="electricity_price" name="electricity_price" type="number" min="0.01" step="0.01" placeholder="0.25" required />
                            <InputGroupAddon align="inline-end">
                                <InputGroupText>/kWh</InputGroupText>
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
        </>
    )
}