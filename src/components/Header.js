import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'


const header = () => {
  return (
    <header>
      <div className='container-max'>
      <Navbar />
      <NavLink to="/">
        <img src="./images/logo.svg" alt='logo' />
      </NavLink>
      <div className='header-cta'>
      <NavLink to="/">646-564-3880</NavLink>
      <NavLink className="btn2" to="/">LET'S TALK</NavLink>
      </div>
      </div>
    </header>
  )
}

export default header