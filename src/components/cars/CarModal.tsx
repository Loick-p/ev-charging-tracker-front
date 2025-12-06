import { useState } from "react"

import { CarForm } from "@/components/cars/CarForm.tsx"

// UI
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Types
import { type Car } from "@/validations/car"

interface CarModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    car?: Car | null
}

export const CarModal = ({ open, onOpenChange, car }: CarModalProps) => {
    const isEditMode = !!car
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSuccess = () => {
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        {isEditMode ? "Edit car" : "Add new car"}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditMode
                            ? "Update the information of your car."
                            : "Fill the information of your car."
                        }
                    </DialogDescription>
                </DialogHeader>

                <CarForm
                    car={car}
                    isEditMode={isEditMode}
                    onSuccess={handleSuccess}
                    onSubmittingChange={setIsSubmitting}
                />


                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>

                    <Button form="car-form" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : isEditMode ? "Edit" : "Add"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}