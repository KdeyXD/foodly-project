import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import MobileNavBar from './components/MobileNavBar'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <NavBar />
      {/* The main content of the app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <MobileNavBar />
    </Router>
  )
}

export default App