import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { useCars } from "@/hooks/useCars.ts"

// Types
import { carFormSchema } from "@/validations/car.ts"

// UI
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
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

// Icons
import { Plus } from "lucide-react"

export const AddCarModal = () => {
    const { createCar, isCreating } = useCars()

    const [addModalOpen, setAddModalOpen] = useState<boolean>(false)

    const form = useForm({
        defaultValues: {
            brand: '',
            model: '',
            year: 2025,
            range: 1,
            batteryCapacity: 1
        },
        validators: {
            onSubmit: carFormSchema,
        },
        onSubmit: async ({ value }) => {

            try {
                // TEMPORARY
                //await createCar(value)
                await createCar({ ...value, owner: "api/users/1"})

                form.reset()
                toast.success("Car has been created successfully.")

                setAddModalOpen(false)
            } catch (error) {
                toast.error('An error occurred while adding the car. Please try again.')

                console.log(error)
            }
        },
    })

    return (
        <>
            <Dialog
                open={addModalOpen}
                onOpenChange={(open) => {
                    setAddModalOpen(open)
                    if (!open) {
                        form.reset()
                    }
                }}
            >
                <DialogTrigger asChild>
                    <Button>
                        <Plus /> Add car
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add new car</DialogTitle>
                        <DialogDescription>
                            Fill the information of your car.
                        </DialogDescription>
                    </DialogHeader>

                    <form id="add-car-form" onSubmit={(e)=> {
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

                        <Button form="add-car-form" type="submit" disabled={isCreating}>
                            {isCreating ? 'Adding...' : 'Add'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}