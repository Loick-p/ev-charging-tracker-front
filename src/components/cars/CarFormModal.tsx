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

export const CarFormModal = () => {
    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new car</DialogTitle>
                    <DialogDescription>
                        Fill the information of your car.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="brand_name">Brand name</Label>
                        <Input id="brand_name" name="brand_name" placeholder="Tesla" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="model">Model</Label>
                        <Input id="model" name="model" placeholder="Model Y" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" name="year" type="number" min="1950" max="2030" placeholder="2025" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="range">Range</Label>
                        <InputGroup>
                            <InputGroupInput id="range" name="range" type="number" min="1" max="2000" placeholder="545" />
                            <InputGroupAddon align="inline-end">
                                <InputGroupText>km</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="battery_capacity">Battery capacity</Label>
                        <InputGroup>
                            <InputGroupInput id="battery_capacity" name="battery_capacity" type="number" min="1" max="500" placeholder="78" />
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
        </>
    )
}