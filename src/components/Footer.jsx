import React from 'react'
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section bg-dark border-top mt-5">
      <div className="container py-4">
        <div className="row footer-content text-center text-md-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0 footer-column">
            <h3 className="mb-3">Foodly</h3>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0 footer-column">
            <h3 className="mb-3">Help &amp; Contact</h3>
            <ul className="list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0 footer-column">
            <h3 className="mb-3">Delivery Cities</h3>
            <ul className="list-unstyled">
              <li><a href="#">New York</a></li>
              <li><a href="#">Los Angeles</a></li>
              <li><a href="#">Chicago</a></li>
              <li><a href="#">Houston</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 footer-column">
            <h3 className="mb-3">Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
              <li><a href="#"><i className="bi bi-twitter me-2"></i>Twitter</a></li>
              <li><a href="#"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
              <li><a href="#"><i className="bi bi-tiktok me-2"></i>TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center mt-4 text-muted small">
          © 2025 Foodly Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
