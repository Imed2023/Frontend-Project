import React from 'react'
import { Link } from 'react-router-dom'


function Intro() {
  return (
    <div className='intro-app'>
        <div className='intro-icons'>
        <Link to="/live">
            <img className='img-intro' src="./Images/live.png" alt="Live" width={300}/>
        </Link> 
        <Link to="/vod">
            <img className='img-intro' src="./Images/flix_movies.png" alt="" width={300}/>
            </Link>
        <Link to="/Series">
            <img className='img-intro' src="./Images/flix_series.png" alt="Live" width={300}/> 
        </Link>
        </div>
        <div className='app-title'>
      <h1>The World in Your Hands</h1>
      <Link to="/navbar">
      <button className='log-dash'>Dashboard</button>
      </Link>
      </div>
      
        
    </div>

    

  )
}

export default Intro