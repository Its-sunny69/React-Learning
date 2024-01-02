import React from 'react'
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => {
    state.auth.status
  })

  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/Login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/Signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/All Posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/Add Post",
      active: authStatus
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
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
                <li key={item.slug}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='bg-black text-white px-2'>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header