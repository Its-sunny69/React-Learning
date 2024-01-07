import React from 'react'
import '../CSS/Logo.css'

function Logo({width = '100px'}) {
  return (
    <div  className='logo-div font-bold text-3xl text-'><span className='logo-text2'>L</span><span className='logo-text1'>o</span><span className='logo-text2'>g</span><span className='logo-text2'>o</span></div>
  )
}

export default Logo