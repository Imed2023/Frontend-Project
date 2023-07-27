
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from './spinner';
import Navbar from './Navbar';


const AllUsers = () => {
  const [records, setRecords] = useState([]);
  const [isSending, setIsSending] = useState(false);  
          
  useEffect(() => {
    // Appeler l'API côté serveur pour récupérer les enregistrements
    axios.get('http://localhost:4000/allusers')
      .then(response => setRecords(response.data))
      .catch(error => console.error('Error fetching records', error));
  }, []);

  const handleDeleteUser = async (userTodelete) => {
   
    await axios.delete(`http://localhost:4000/userdelete/${userTodelete}`);
    window.location.reload();


      };
      
      const handleSendMail = async (userTosend) => {
                        
      

          try {
            const response = await axios.post(`http://localhost:4000/emailsend/${userTosend}`);
            console.log(response);
          } catch (error) {
            console.error('Error sending email:', error);
          } finally {
            setIsSending(false);
          }
        };

  return (
    <div>
    <Navbar/>
    <div className='users-t'>
      <h1>Users List</h1>
      <div className='users-table'>
      <table className='users-tab'>
        <thead>
          <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record._id}>
                
                <td>{record.first_name}</td>
                <td>{record.last_name}</td>
              <td>{record.email}</td>
              <td>{record.password}</td>
              <td className='user-action'>
                                       
                <img onClick={() => handleDeleteUser(record.email)} src="/Images/del.png" alt="Delete" width={40}/> 
                <img src="/Images/update.png" alt="Update" width={40}/> 
                <img onClick={() => handleSendMail(record.email)} src="/Images/mailsend.png" alt="Send Email" width={40}/> 
              

               </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="pos-center">
      <Spinner isLoading={isSending} />
    </div>
    </div>
    </div>
  );
};

export default AllUsers;
