import React from 'react'
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../CSS/Header.css'
import '../../CSS/LoginBtn.css'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus
    },
  ]

  const default_btn = 'nav-btn px-2 py-1 mx-2 border-2 border-tertiary rounded-sm'
  const special_btn = 'login-btn px-2 py-1 mx-2 border-2 border-tertiary rounded-sm'

  return (
    <header className='py-3 shadow bg-gray-500 sticky top-0 backdrop-blur-md'>
      <Container>
        <nav className='flex'>
          <div className='mr-3'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`${ item.name == 'Login' || item.name == 'Signup' ? special_btn: default_btn}`}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header