import React from 'react'
import { Link } from 'react-router-dom'

function MovieCatCard({mov}) {
  return (
      <Link to={`/vod/${mov.id}`}>
      <div className='cat-movie'>
      <img src={mov.category_icon} alt="" width={250} />
      
      </div>
      </Link>
  )
}

export default MovieCatCard