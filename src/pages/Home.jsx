import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import FoodCard from '../components/FoodCard'
import Footer from '../components/Footer'
import MobileNavBar from '../components/MobileNavBar'
import Category from '../components/Category'
const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Banner />
      <Category />
      <FoodCard />
      <Footer />
      {/* <MobileNavBar /> */}
    </div>
  )
}

export default Home
