import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
    <button 
    className='px-3'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn