import { useEffect } from "react"
import { useForm } from "@tanstack/react-form"
import { useCars } from "@/hooks/useCars.ts"

// UI
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group.tsx"
import { toast } from "sonner"

// Types
import { type Car, carFormSchema } from "@/validations/car"

interface EditCarModalProps {
    car: Car
    isOpen: boolean,
    onClose: () => void,
}

export const EditCarModal = ({ car, isOpen, onClose }: EditCarModalProps) => {
    const { updateCar, isUpdating } = useCars()

    const form = useForm({
        defaultValues: {
            brand: car.brand ?? '',
            model: car.model ?? '',
            year: car.year ?? 2025,
            range: car.range ?? 1,
            batteryCapacity: car.batteryCapacity ?? 1
        },
        validators: {
            onSubmit: carFormSchema,
        },
        onSubmit: async ({ value }) => {

            try {
                // TEMPORARY
                //await updateCar(car.id, value)
                await updateCar(car.id, value)

                form.reset()
                toast.success("Car has been updated successfully.")

                onClose()
            } catch (error) {
                toast.error('An error occurred while editing the car. Please try again.')

                console.log(error)
            }
        },
    })

    useEffect(() => {
        if (!isOpen) {
            form.reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit car</DialogTitle>
                <DialogDescription>
                    Update the information of your car.
                </DialogDescription>
            </DialogHeader>

            <form id="edit-car-form" onSubmit={(e)=> {
                e.preventDefault()
                form.handleSubmit()
            }}>
                <FieldGroup className="gap-4">
                    <form.Field
                        name="brand"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Brand</FieldLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        aria-invalid={isInvalid}
                                        placeholder="Tesla"
                                    />
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="model"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Model</FieldLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        aria-invalid={isInvalid}
                                        placeholder="Model Y"
                                    />
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="year"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Year</FieldLabel>
                                    <Input
                                        type="number"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(parseInt(e.target.value))}
                                        aria-invalid={isInvalid}
                                        placeholder="2025"
                                    />
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="range"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Range</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            type="number"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(parseInt(e.target.value))}
                                            aria-invalid={isInvalid}
                                            placeholder="545"
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText>km</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="batteryCapacity"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Battery capacity</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            type="number"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(parseInt(e.target.value))}
                                            aria-invalid={isInvalid}
                                            placeholder="78"
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText>kWh</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                </FieldGroup>
            </form>

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline" type="button">Cancel</Button>
                </DialogClose>

                <Button form="edit-car-form" type="submit" disabled={isUpdating}>
                    {isUpdating ? 'Editing...' : 'Edit'}
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}