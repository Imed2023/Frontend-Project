import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/adduser', {
        firstname,
        lastname,
        email,

      });
      const data = response.data;
      console.log(response.data)
      if (data) {
        setMessage('Register successful!');
        
        // Perform any necessary actions upon successful login, such as redirecting the user.
      } 
    } catch (error) {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
    <div className='register-form'>
      <h1>Register</h1>
      <br />
      <br />
      <form onSubmit={handleregister}>
        <div className='fname-div'>
          <input
            type="text"
            id="firstname"
            placeholder='input your first name'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className='lname-div'>
          <input
            type="text"
            id="lastname"
            placeholder='input your last name'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        
        <div className='email-div'>
          
          <input
            type="text"
            id="email"
            placeholder='input your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        
      </form>
      
        
      <p>{message}</p>

      
    </div>

       
</div>
  );
};

export default Register;
