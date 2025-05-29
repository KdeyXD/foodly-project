import React from 'react'
import '../assets/css/NavBar.css'
import { Link } from 'react-router-dom'
const MobileNavBar = () => {
  return (
    <nav className="mobile-navbar d-block d-md-none fixed-bottom bg-light border-top shadow-sm">
      <div className="d-flex justify-content-around align-items-center py-2">
        <Link to="/" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-house-door"></i></span>
          <span className="small">Home</span>
        </Link>
        <Link to="/search" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-search"></i></span>
          <span className="small">Search</span>
        </Link>
        <Link to="/cart" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-cart"></i></span>
          <span className="small">Cart</span>
        </Link>
        <Link to="/profile" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-person"></i></span>
          <span className="small">Profile</span>
        </Link>
      </div>
    </nav>
  )
}

export default MobileNavBar
