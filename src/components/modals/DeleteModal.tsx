import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog.tsx"
import { Button } from "@/components/ui/button.tsx"

interface DeleteModalProps {
    title?: string
    description?: string
    onDelete?: () => void
    isLoading?: boolean
}

export const DeleteModal = ({
    title = "Are you sure ?",
    description = "This action cannot be undone. This will permanently delete the item and remove its data from our servers.",
    onDelete,
    isLoading = false
}: DeleteModalProps) => {
    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>

                    <Button
                        type="submit"
                        variant="destructive"
                        onClick={onDelete}
                        disabled={isLoading}
                    >
                        {isLoading ? "Deleting..." : "Delete"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </>
    )
}