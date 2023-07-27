import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Spinner from './spinner';

function MovieDetail() {
    const [moviedet, setMoviedet] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const params=useParams()
    useEffect(() => {
      setIsLoading(true);
        const fetchData = async () =>{
          const result =await axios.get("http://localhost:4000/moviedetail")
          const mov=result.data.find(el=>el.id===params.id)
          setMoviedet(mov)
          console.log(result)
          
          setIsLoading(false);
        }
    
       fetchData()
       
    
      }, [params.id]);
    
      

  return (
        <div className='movie-details'>
         <div className='movie-poster'>
        <img src={moviedet.stream_icon} alt="" width={400} />
        <Link to={`/moviedetail/movieplayer/${moviedet.id}`}>
        <button>Play</button>
        </Link>

        </div>
        <div className='movie-desc'>
        <h4 style={{color:"white"}}>Genre : {moviedet.genre}</h4><br/>
        <h4 style={{color:"white"}}>Description : {moviedet.plot}</h4><br/>
        <h4 style={{color:"white"}}>Cast : {moviedet.cast}</h4><br/>
        <h4 style={{color:"white"}}>Duration : {moviedet.duration}</h4><br/>
        <h4 style={{color:"white"}}>Rate : {moviedet.rate}</h4><br/>
        </div>
        
        <div className="pos-center">
            <Spinner isLoading={isLoading} />
        </div>

        </div>
  )
}

export default MovieDetail