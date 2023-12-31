import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './App.css'
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })
  }, [])

  return !loading ? (
    <div className='h-screen bg-slate-400 content-center mx-auto'>
      <div className=' w-full block text-center'>
        <Header />
        <main>
          TODO: <outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
