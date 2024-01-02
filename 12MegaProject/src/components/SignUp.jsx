import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authservice.createAccount(data)

            if (userData) {
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full'>
            <div>
                <Logo width='100%'/>
            </div>
            <h2>Sign up to create account</h2>
            <p>Already have an Account?
                <Link to='/login'>
                    Sign in
                </Link>
            </p>
            {error && <p>{error}</p>}

            <form onClick={handleSubmit(create)}>
                <div>
                <Input
                    label="Name: "
                    type="text"
                    placeholder="Enter your name"
                    {...register("name"), {required: true}}
                    />
                    <Input
                    label="Email: "
                    type="email"
                    placeholder="Enter your email"
                    {...register("email"), {
                        requried: true,
                        validate: {
                            matchPattern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) || "Email address must be valid address"
                        } 
                    }}
                    />

                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password"), {required: true, minLength: 8}}
                    />
                    <Button
                    type='submit'
                    className=''>Create Account</Button>
                </div>
            </form>
        </div>
  )
}

export default SignUp