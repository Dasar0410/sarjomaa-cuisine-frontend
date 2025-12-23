import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(16, "Username must be at most 16 characters."),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters.")
    .max(100, "Email must be at most 100 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters."),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)
    const navigate = useNavigate()
    const { signUp } = UserAuth()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const { errors } = form.formState;

    async function onSubmit(data: z.infer<typeof formSchema>) {
      setLoading(true)
      setServerError(null) // Clear previous errors
      
      try {
            const result = await signUp(data.username, data.email, data.password)

            if (result.success) {
                console.log("Sign up successful!", result.data)
                navigate('/')
            } else if (result.error) {
                setServerError(result.error)
            }
        } catch (err) {
            console.error("Unexpected error during sign up:", err)
            setServerError("An unexpected error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Opprett en konto</CardTitle>
        <CardDescription>
          Skriv inn informasjonen din nedenfor for å opprette en konto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {serverError && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-4">
                <p className="text-sm font-medium">{serverError}</p>
              </div>
            )}
            <Field>
              <FieldLabel htmlFor="username">Brukernavn</FieldLabel>
              <Input id="username" type="text" placeholder="" {...form.register("username")} />
              {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username.message}</p>}
            </Field>
            <Field>
              <FieldLabel htmlFor="email">E-post</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="ole@nordmann.no"
                {...form.register("email")}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
              <FieldDescription>
                Vi bruker denne for å kontakte deg. Vi deler ikke e-posten din
                med noen andre.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Passord</FieldLabel>
              <Input id="password" type="password" {...form.register("password")} />
                {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
              <FieldDescription>
                Må være minst 8 tegn langt.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Bekreft passord
              </FieldLabel>
              <Input id="confirm-password" type="password" {...form.register("confirmPassword")} />
              {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>}
              <FieldDescription>Vennligst bekreft passordet ditt.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "Oppretter konto..." : "Opprett konto"}
                </Button>
                <FieldDescription className="px-6 text-center">
                  Har du allerede en konto? <Link to="/signin" className="underline">Logg inn</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
