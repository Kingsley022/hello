import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <Link to="/" className='list-item'>Home</Link>
        <Link to="/management" className='list-item'>Management</Link>
    </div>
  )
}

export default Navbar