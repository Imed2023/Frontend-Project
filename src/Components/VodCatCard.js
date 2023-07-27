import React from 'react'
import { Link } from 'react-router-dom'

function VodCatCard({movie}) {
  return (
    <Link to={`/moviedetail/${movie.id}`}>
    <div className='vod-cat-card'>
        
        <img src={movie.stream_icon} alt="" />
        
    </div>
    </Link>
  )
}

export default VodCatCard