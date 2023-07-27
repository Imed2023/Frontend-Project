import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email,
        password,
      });
      const data = response.data;
      console.log(response.data)
      if (data) {
        setMessage('Login successful!');
        navigate('/intro')
        // Perform any necessary actions upon successful login, such as redirecting the user.
      } 
    } catch (error) {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
    <div className='login-form'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='user-div'>
        <img src="./Images/user1.png" alt="username" width={50}/>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='pass-div'>
          <img src="./Images/Pass4.png" alt="password"  width={50}/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        
      </form>
      
        
      <p>{message}</p>

      
    </div>

        <Link to="/register">
            <img className='img-register' src="./Images/register.png" alt="Register" width={150}/> 
        </Link>
</div>
  );
};

export default Login;
