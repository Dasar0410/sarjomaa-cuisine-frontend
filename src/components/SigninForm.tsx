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

        try {
            const result = await signIn(data.email, data.password)

            if (result.success){
                console.log("Sign in successfull!", result.data)
                navigate('/')
            }
        } catch (error) {
            console.error("Unexpected error during sign in:", error)
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
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" {...form.register("password")} />
                {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
            </Field>
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
