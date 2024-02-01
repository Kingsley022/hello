import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <Link to="/" className='list-item'>Home</Link>
        <Link to="/management" className='list-item'>Management</Link>
        <Link to="/auth" className='list-item'>Login</Link>

    </div>
  )
}

export default Navbar