import React from 'react'
import VodCatCard from './VodCatCard'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './spinner';

function VodCat() {

  const [movi, setMovi] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const params=useParams()
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () =>{
      let result = await axios.get("http://localhost:4000/movies")
      const fmovies = result.data.filter((ch) => ch.category_id === params.id)   
      console.log(fmovies)
      setMovi(fmovies)
      
      setIsLoading(false);
  

      
    }

   fetchData()
   

  }, [params.id]);


  

  return (
    
    <div className='vod-cats'>

    {movi.map((el) => (
        
      <VodCatCard movie={el}/>

  ))}

    <div className="pos-center">
      <Spinner isLoading={isLoading} />
    </div>

   </div> 
  )
}

export default VodCat