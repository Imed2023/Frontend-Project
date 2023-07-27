import React from 'react'
import { Link } from 'react-router-dom'

function TvCard({chan}) {

  return (
    <div>

<div className='tv-cat' >
        <Link to={`/live/channelslive/${chan.id}`}>
        <img className='img-tvcat' src={chan.category_icon} alt="" />
        
        </Link>
        
        <div className='ch-name'>
        
        <img src="./Images/2.png" alt="" width={200} height={60}/>
        <h6 style={{color:"black"}}>{chan.category_name}</h6>
        </div>
        </div>

    </div>
  )
}

export default TvCard