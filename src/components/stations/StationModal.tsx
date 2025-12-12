import { useState } from "react"

// Components
import { StationForm } from "@/components/stations/StationForm.tsx"

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
import { type Station } from "@/validations/station"

interface StationModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    station?: Station | null
}

export const StationModal = ({ open, onOpenChange, station }: StationModalProps) => {
    const isEditMode = !!station
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSuccess = () => {
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        {isEditMode ? "Edit station" : "Add new station"}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditMode
                            ? "Update the information of your station."
                            : "Fill the information of your station."
                        }
                    </DialogDescription>
                </DialogHeader>

                <StationForm
                    station={station}
                    isEditMode={isEditMode}
                    onSuccess={handleSuccess}
                    onSubmittingChange={setIsSubmitting}
                />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" type="button">Cancel</Button>
                    </DialogClose>

                    <Button form="station-form" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : isEditMode ? "Edit" : "Add"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}