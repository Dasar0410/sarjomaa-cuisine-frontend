
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { signUp, signIn } = UserAuth()
    const navigate = useNavigate()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log(email, password)
            const result = await signUp(username, email, password)

            if (result.success) {
                console.log("Sign up successful!", result.data)
                const signInResult = await signIn(email, password)
                if(signInResult.success){
                    navigate('/')
                } else {console.error("Unexpected error during sign in:", signInResult.error)}
                
            }
        } catch (err) {
            console.error("Unexpected error during sign up:", err)
            setError("An unexpected error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return(
    <div>
        <form onSubmit={handleSignUp}>
            <h2>Sign up!</h2>
            <p>Already have an account? <Link to= '/signin'>Sign in!</Link> </p>
            <div>
                <input placeholder='Username' type='username' name='username' onChange={(e) => setUsername(e.target.value)}></input>
                <input placeholder='Email' type="email" name='email' onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder='Password' type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up!</button>
            </div>
        </form>
    </div>
    )
}

export default Signup