import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import '../../CSS/LoginBtn.css'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
    <button 
    className='login-btn px-2 py-1 mx-2 border-2 border-tertiary rounded-sm'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn