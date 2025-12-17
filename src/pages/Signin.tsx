import { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import NavigationBar from "@/components/NavigationBar"

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signIn } = UserAuth()
    const navigate = useNavigate()

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await signIn(email, password)

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

    return(
    <div>
        <NavigationBar />
        <form onSubmit={handleSignIn}>
            <h2>Sign in!</h2>
            <div>
                <input placeholder='Email' type="email" name='email' onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder='Password' type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign In!</button>
            </div>
        </form>
    </div>
    )
}

export default Signin