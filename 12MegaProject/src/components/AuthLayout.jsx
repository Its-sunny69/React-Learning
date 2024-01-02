import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({ children, authentication }) {
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            // {ture} && true !== true ==> {false} ---->> false
            // {ture} && false !== true ==> {true} ---->> true
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            // !true ==> {false} && true !== true ==> {false} ---->> false
            // !true ==> {false} && false !== true ==> {true} ---->> false
            navigate("/")
        }
        setloader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}
