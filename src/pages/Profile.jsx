import React from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../data/users'

const Profile = () => {
  const navigate = useNavigate();
  // Simulate getting the current user from localStorage
  const userId = Number(localStorage.getItem('userId'));
  const user = users.find(u => u.id === userId);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>User not found. Please log in.</h2>
        <button onClick={() => navigate('/login')} style={{ marginTop: 20, padding: '8px 16px', borderRadius: 6, border: 'none', background: '#198754', color: '#fff', cursor: 'pointer' }}>Go to Login</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 32, position: 'relative' }}>
      <img src={user.profilePicture} alt="Profile" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, marginTop: 16 }} />
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Address:</b> {user.address}</p>
      <p><b>Birth Date:</b> {user.birthDate}</p>
      <p><b>Gender:</b> {user.gender}</p>
      <button onClick={handleLogout} style={{ marginTop: 32, padding: '10px 32px', borderRadius: 6, border: 'none', background: '#dc3545', color: '#fff', cursor: 'pointer', fontWeight: 600 }}>Log Out</button>
    </div>
  )
}

export default Profile
