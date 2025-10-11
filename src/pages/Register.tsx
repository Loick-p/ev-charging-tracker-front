import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

import { Lock, MailIcon, User, Zap } from "lucide-react"

export default function Register() {
    return (
        <div className="flex flex-col gap-6">
            <form>
                <FieldGroup>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex size-8 items-center justify-center rounded-md">
                            <Zap className="size-6 text-primary" />
                        </div>
                        <h1 className="text-xl font-bold">Welcome to EV Charging Tracker</h1>
                        <FieldDescription>
                            Already have an account ? <Link to="/login">Log in</Link>
                        </FieldDescription>
                    </div>
                    <Field>
                        <FieldLabel htmlFor="username" className="flex gap-1">
                            Username
                            <span className="text-red-500">*</span>
                        </FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="username"
                                type="text"
                                placeholder="John Doe"
                                required
                            />
                            <InputGroupAddon>
                                <User />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="flex gap-1">
                            Email
                            <span className="text-red-500">*</span>
                        </FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="email"
                                type="email"
                                placeholder="mail@example.com"
                                required
                            />
                            <InputGroupAddon>
                                <MailIcon />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password" className="flex gap-1">
                            Password
                            <span className="text-red-500">*</span>
                        </FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                            />
                            <InputGroupAddon>
                                <Lock />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <Button type="submit">Register</Button>
                    </Field>
                </FieldGroup>
            </form>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
