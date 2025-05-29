import React from 'react'
import '../assets/css/Banner.css'

const Banner = () => {
  return (
    <div className="banner-section w-100 d-flex align-items-center justify-content-center text-center px-3 mb-4">
      <div className="banner-content p-4 mx-auto">
        <h1 className="display-4 fw-bold mb-3">Delicious Food Delivered Fast</h1>
        <p className="lead mb-4">Order your favorite meals from Foodly and get them delivered to your door in minutes!</p>
        <a href="#menu" className="btn btn-success btn-lg px-5">Order Now</a>
      </div>
    </div>
  )
}

export default Banner
