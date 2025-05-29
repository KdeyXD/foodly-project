import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../data/users'

const Login = () => {
  // Hide navbar if present
  useEffect(() => {
    // Hide navbars if they exist
    const navbars = document.querySelectorAll('.navbar, .mobile-navbar');
    navbars.forEach(nav => nav.style.setProperty('display', 'none', 'important'));
    return () => {
      navbars.forEach(nav => nav.style.removeProperty('display'));
    };
  }, []);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem('userId', user.id)
      setError('')
      navigate('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div style={{ maxWidth: 350, margin: '5rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 32, textAlign: 'center' }}>
      <h2 style={{ marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 10, marginBottom: 16, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: 10, marginBottom: 16, borderRadius: 6, border: '1px solid #ccc' }}
        />
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 6, border: 'none', background: '#198754', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  )
}

export default Login
