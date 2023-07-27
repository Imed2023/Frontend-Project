// RecordTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllUsers from './AllUsers';
import Navbar from './Navbar';

const LiveCats = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/livecats')
      .then(response => setRecords(response.data))
      .catch(error => console.error('Error fetching records', error));
  }, []);

  return (
    <div>
        <Navbar/>
    <div className='users-t'>
      <h1>Live Cats</h1>
      <div className='users-table'>
      <table className='users-tab'>
        <thead>
          <tr>
          <th>Id</th>
            <th>Category Name</th>
            <th>Category Icon</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record._id}>
                <td>{record._id}</td>
              <td>{record.category_name}</td>
              <td>{record.category_icon}</td>
              <td>
                <img src={record.category_icon} alt="icon" width={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="buttons-actions">
      <Link to="/adduser">
            <img className='img-newuser' src="/Images/button-rec-add.png" alt="Add" width={150}/> 
        </Link>
        <Link to="/adduser">
            <img className='img-newuser' src="/Images/button-rec-update.png" alt="Update" width={150}/> 
        </Link>
        <Link to="/adduser">
            <img className='img-newuser' src="/Images/button-rec-delete.png" alt="Delete" width={150}/> 
        </Link>
        
      </div>
    </div>
    </div>
  );
};

export default LiveCats;
