import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TvCardLive from './TvCardLive';
import { useParams } from 'react-router-dom';
import Spinner from './spinner';

function ChannelsLive() {

  
  const [channel, setChannel] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const params=useParams()
  
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () =>{
      const result = await axios.get("http://localhost:4000/livechannels")
      
      const fchannels = result.data.filter((ch) => ch.category_id == params.id)   
      console.log(fchannels)
      setChannel(fchannels)
      setIsLoading(false);
      
    }

   fetchData()
   

  },[]);
  
  
  return (
    <div>

<div className='channels-list'>
      {channel.map((el) => (
       
        <TvCardLive chan={el}/>

    ))}
    

    </div>
  
    <div className="pos-center">
      <Spinner isLoading={isLoading} />
    </div>


    </div>
  )
}

export default ChannelsLive