import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TvCard from './TvCard';
import Spinner from './spinner';

function Live() {

  
  const [channel, setChannel] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () =>{
      let result = await axios.get("http://localhost:4000/livecats")

      console.log(result)
      
      setChannel(result.data)
      
      setIsLoading(false);

    }

   fetchData()
   

  }, []);
  

  return (
    
    <div className='channels-list'>
      
      {channel.map((el) => (
        
        <TvCard chan={el}/>

    ))}
     <div className="pos-center">
      <Spinner isLoading={isLoading} />
    </div>

    
    </div>
  
  )
}

export default Live