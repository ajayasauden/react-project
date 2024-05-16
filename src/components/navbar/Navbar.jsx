import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="container">
        <div className="navbar-brand">PMS</div>
        <ul className="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" className="btn-add-product">Add Product</a></li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar