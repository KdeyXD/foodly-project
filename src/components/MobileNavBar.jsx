import React from 'react'
import '../assets/css/NavBar.css'

const MobileNavBar = () => {
  return (
    <nav className="mobile-navbar d-block d-md-none fixed-bottom bg-light border-top shadow-sm">
      <div className="d-flex justify-content-around align-items-center py-2">
        <a href="#home" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-house-door"></i></span>
          <span className="small">Home</span>
        </a>
        <a href="#search" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-search"></i></span>
          <span className="small">Search</span>
        </a>
        <a href="#cart" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-cart"></i></span>
          <span className="small">Cart</span>
        </a>
        <a href="#profile" className="mobile-nav-link text-center flex-fill">
          <span className="d-block fs-4"><i className="bi bi-person"></i></span>
          <span className="small">Profile</span>
        </a>
      </div>
    </nav>
  )
}

export default MobileNavBar
