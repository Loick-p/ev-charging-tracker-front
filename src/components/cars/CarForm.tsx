import { useEffect } from "react"

// UI
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group.tsx"
import { toast } from "sonner"

// Types
import { type Car, carFormSchema } from "@/validations/car"

import { useForm } from "@tanstack/react-form"
import { useCars } from "@/hooks/useCars.ts"

interface CarFormProps {
    car?: Car | null
    isEditMode: boolean
    onSuccess: () => void
    onSubmittingChange: (isSubmitting: boolean) => void
}

export const CarForm = ({ car, isEditMode, onSuccess, onSubmittingChange }: CarFormProps) => {
    const {
        createCar,
        updateCar,
        isCreating,
        isUpdating
    } = useCars()
    const isSubmitting = isCreating || isUpdating
    
    const form = useForm({
        defaultValues: {
            brand: car?.brand ?? '',
            model: car?.model ?? '',
            year: car?.year ?? 2025,
            range: car?.range ?? 1,
            batteryCapacity: car?.batteryCapacity ?? 1
        },
        validators: {
            onSubmit: carFormSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                if (isEditMode) {
                    await updateCar(car!.id, value)
                } else {
                    // @ts-expect-error - temporary owner assignment
                    await createCar({ ...value, owner: "api/users/1"})
                }

                form.reset()

                const action = isEditMode ? "updated" : "created"
                toast.success(`Car has been ${action} successfully.`)

                onSuccess()
            } catch (error) {
                const action = isEditMode ? "updating" : "creating"
                toast.error(`An error occurred while ${action} the car. Please try again.`)

                console.log(error)
            }
        },
    })

    useEffect(() => {
        onSubmittingChange(isSubmitting)
    }, [isSubmitting, onSubmittingChange])

    return (
        <form
            id="car-form"
            onSubmit={(e)=> {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
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
                                        onChange={(e) => field.handleChange(parseFloat(e.target.value))}
                                        aria-invalid={isInvalid}
                                        placeholder="78.8"
                                        step="0.1"
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
    )
}