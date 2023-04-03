import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return <nav>
    <div className='menus'>
        <ul>
        <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Work">Work</NavLink>
            </li>
            <li>
                <NavLink to="/Services">Servicecs</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="/News">News</NavLink>
            </li>
       
        </ul>
    </div>
  </nav>
}

export default navbar