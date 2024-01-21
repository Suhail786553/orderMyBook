import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import './Loginpage.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials (dummy check for demo)
    if (username === 'suhail','prem','Anas','parvez' && password === '4321@') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
  if (loggedIn) {
    return <Navigate to="/home"/>;//with the help of navigate tag go to another page after clicking into login button
  }

  return (
    <div className="container1">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!loggedIn ? (
        <form style={{ textAlign: 'center', border: '1px black', borderRadius: '11px', padding: '124px',backgroundColor:'white' }} onSubmit={handleLogin}>
          
          <h2 className="login">Login Here</h2>
         
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid black', marginRight: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid black', marginRight: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#1dd1a1', color: 'black', border: 'none', cursor: 'pointer' }}>
            Login
          </button>
          <div style={{margin:"12px"}}className="forgot">
            <h5>Forget Password</h5>
            <u>Signup</u>
          </div>
        
        </form>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You are logged in.Click Home to go Home Page of Website</p>
        
        </div>
        
      )}
    </div>
    </div>
  );
};

export default LoginPage;
