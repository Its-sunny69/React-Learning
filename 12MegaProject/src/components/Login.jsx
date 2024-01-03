import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data);
            if (session) {
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='w-full'>
            <div>
                <Logo width='100%' />
            </div>
            <h2>Sign in to our account</h2>
            <p>Don't have any Account?
                <Link to='/signup'>
                    Sign up
                </Link>
            </p>
            {error && <p>{error}</p>}

            <form onClick={handleSubmit(login)}>
                <div>
                    <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            requried: true,
                            validate: {
                                matchPattern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) || "Email address must be valid address"
                            }
                        })}
                    />

                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true, minLength: 8 })}
                    />
                    <Button
                        type='submit'
                        className=''>Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default Login