import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FoodCard from './components/FoodCard'
import Footer from './components/Footer'
import MobileNavBar from './components/MobileNavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <FoodCard />
      <Footer />
      <MobileNavBar />
    </div>
  )
}

export default App
