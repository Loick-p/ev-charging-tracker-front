import { useState } from "react"

// UI
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

// Types
import type { Car } from "@/types/car"
import type { FormEvent } from "react"

interface CarFormModalProps {
    car?: Car
    onSubmit: () => void
}

export const CarFormModal = ({ car, onSubmit }: CarFormModalProps) => {
    const [formData, setFormData] = useState({
        brand: car?.brand || '',
        model: car?.model || '',
        year: car?.year || '',
        range: car?.range || '',
        batteryCapacity: car?.batteryCapacity || ''
    })

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()

        onSubmit()
    }

    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{car ? 'Edit car' : 'Add new car'}</DialogTitle>
                    <DialogDescription>
                        {car ? 'Update the information of your car.' : 'Fill the information of your car.'}
                    </DialogDescription>
                </DialogHeader>

                <form id="carForm" onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-2">
                        <div className="grid gap-3">
                            <Label htmlFor="brand" className="flex gap-1">
                                Brand name
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="brand"
                                value={formData.brand}
                                onChange={(e) => handleInputChange('brand', e.target.value)}
                                placeholder="Tesla"
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="model" className="flex gap-1">
                                Model
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="model"
                                value={formData.model}
                                onChange={(e) => handleInputChange('model', e.target.value)}
                                placeholder="Model Y"
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="year" className="flex gap-1">
                                Year
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="year"
                                type="number"
                                value={formData.year}
                                onChange={(e) => handleInputChange('year', parseInt(e.target.value) || 0)}
                                min="2000"
                                max={new Date().getFullYear() + 1}
                                placeholder="2025"
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="range" className="flex gap-1">
                                Range
                                <span className="text-red-500">*</span>
                            </Label>
                            <InputGroup>
                                <InputGroupInput
                                    id="range"
                                    type="number"
                                    value={formData.range}
                                    onChange={(e) => handleInputChange('range', parseInt(e.target.value) || 0)}
                                    min="1"
                                    placeholder="545"
                                    required
                                />
                                <InputGroupAddon align="inline-end">
                                    <InputGroupText>km</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="battery_capacity" className="flex gap-1">
                                Battery capacity
                                <span className="text-red-500">*</span>
                            </Label>
                            <InputGroup>
                                <InputGroupInput
                                    id="battery_capacity"
                                    type="number"
                                    value={formData.batteryCapacity}
                                    onChange={(e) => handleInputChange('batteryCapacity', parseInt(e.target.value) || 0)}
                                    min="1"
                                    placeholder="78"
                                    required
                                />
                                <InputGroupAddon align="inline-end">
                                    <InputGroupText>kWh</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>

                    <Button form="carForm" type="submit">Add</Button>
                </DialogFooter>
            </DialogContent>
        </>
    )
}