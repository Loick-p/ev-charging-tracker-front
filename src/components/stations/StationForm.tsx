import { useEffect } from "react"

// Types
import { type Station, stationFormSchema } from "@/validations/station"

// UI
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field.tsx"
import { Input } from "@/components/ui/input.tsx"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group.tsx"
import { toast } from "sonner"

import { useForm } from "@tanstack/react-form"
import { useStations } from "@/hooks/useStations.ts"

interface StationFormProps {
    station?: Station | null
    isEditMode: boolean
    onSuccess: () => void
    onSubmittingChange: (isSubmitting: boolean) => void
}

export const StationForm = ({ station, isEditMode, onSuccess, onSubmittingChange }: StationFormProps) => {
    const {
        createStation,
        updateStation,
        isCreating,
        isUpdating
    } = useStations()
    const isSubmitting = isCreating || isUpdating

    const form = useForm({
        defaultValues: {
            name: station?.name ?? '',
            outputPower: station?.outputPower ?? 1,
            electricityPrice: station?.electricityPrice ?? 0.1,
        },
        validators: {
            onSubmit: stationFormSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                if (isEditMode) {
                    await updateStation(station!.id, value)
                } else {
                    // @ts-expect-error - temporary owner assignment
                    await createStation({ ...value, owner: "api/users/1"})
                }

                form.reset()

                const action = isEditMode ? "updated" : "created"
                toast.success(`Station has been ${action} successfully.`)

                onSuccess()
            } catch (error) {
                const action = isEditMode ? "updating" : "creating"
                toast.error(`An error occurred while ${action} the station. Please try again.`)

                console.log(error)
            }
        },
    })

    useEffect(() => {
        onSubmittingChange(isSubmitting)
    }, [isSubmitting, onSubmittingChange])

    return (
        <form
            id="station-form"
            onSubmit={(e)=> {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            <FieldGroup className="gap-4">
                <form.Field
                    name="name"
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Home charger"
                                />
                                {isInvalid && (
                                    <FieldError errors={field.state.meta.errors} />
                                )}
                            </Field>

                        )
                    }}
                />
                <form.Field
                    name="outputPower"
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Output power</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        type="number"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(parseFloat(e.target.value))}
                                        aria-invalid={isInvalid}
                                        placeholder="11"
                                        step="0.1"
                                    />
                                    <InputGroupAddon align="inline-end">
                                        <InputGroupText>kW</InputGroupText>
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
                    name="electricityPrice"
                    children={(field) => {
                        const isInvalid =
                            field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Electricity price</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        type="number"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(parseFloat(e.target.value))}
                                        aria-invalid={isInvalid}
                                        placeholder="0.25"
                                        step="0.01"
                                    />
                                    <InputGroupAddon align="inline-end">
                                        <InputGroupText>€/kWh</InputGroupText>
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