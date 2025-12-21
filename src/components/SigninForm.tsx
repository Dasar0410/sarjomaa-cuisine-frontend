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
  email: z
    .string(),
  password: z
    .string(),
})

export function SigninForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)
    const navigate = useNavigate()
    const { signIn } = UserAuth()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { errors } = form.formState;

    async function onSubmit(data: z.infer<typeof formSchema>) {
      setLoading(true)
      setServerError(null) // Clear previous errors

        try {
            const result = await signIn(data.email, data.password)

            if (result.success){
                console.log("Sign in successfull!", result.data)
                navigate('/')
            } else if (result.error) {
                setServerError(result.error)
            }
        } catch (error) {
            console.error("Unexpected error during sign in:", error)
            setServerError("An unexpected error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Sign in to account</CardTitle>
        <CardDescription>
          Enter your information below to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...form.register("email")}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
              <FieldDescription>
                Use the email address associated with your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" {...form.register("password")} />
                {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            </Field>
                        {serverError && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-4">
                <p className="text-sm font-medium">{serverError}</p>
              </div>
            )}
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "Signing In..." : "Sign in"}
                </Button>
                <FieldDescription className="px-6 text-center">
                  Don't have an account? <Link to="/signup" className="underline">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
