import React from 'react'
import { Link } from 'react-router-dom'


function TvCardLive({chan}) {

  const placeholderImage ="/picons/nologo.png"
  const imgsrc=chan.stream_icon

  
  return (

    <Link to={`/live/channelslive/Player/${chan.id}`}>   
<div className='tv-catlive' >
        
        <h4>{chan.stream_display_name}</h4> 
       
            <img className='img-tvcatlive' src={imgsrc ? imgsrc : placeholderImage }  alt="" />
       
    
      

        
        

    </div>
    </Link>
    
  )
}

export default TvCardLive