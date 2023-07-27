import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCatCard from './MovieCatCard';
import Spinner from './spinner';

function Vod() {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () =>{
      let result = await axios.get("http://localhost:4000/moviescats")
      setMovie(result.data)
      setIsLoading(false);

      
    }

   fetchData()
   

  }, []);


  return (
    
    <div className='movies-cats'>
      
      {movie.map((el) => (
        
        <MovieCatCard mov={el}/>

    ))}
    
    <div className="pos-center">
      <Spinner isLoading={isLoading} />
    </div>

    </div>
  
  )
}

export default Vod