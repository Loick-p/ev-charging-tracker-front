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

import { Lock, MailIcon, Zap } from "lucide-react"

export default function Login() {
    return (
        <div className="flex flex-col gap-6">
            <form>
                <FieldGroup>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex size-8 items-center justify-center rounded-md">
                            <Zap className="size-6 text-primary" />
                        </div>
                        <h1 className="text-xl font-bold">Welcome back !</h1>
                        <FieldDescription>
                            Don&apos;t have an account ? <Link to="/register">Sign up</Link>
                        </FieldDescription>
                    </div>
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
                        <Button type="submit">Login</Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
