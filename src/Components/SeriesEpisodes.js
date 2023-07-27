import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';




function SeriesEpisodes() {
 
  
  const [serie, setSerie] = useState([])
  const params=useParams()
  useEffect(() => {
    const fetchData = async () =>{
      let result = await axios.get(`https://api.ipfox.co/ipfox-v5/ok.php?mode=seriescat&code=7701120605587496&mac=3034D2291532&serial=%s&catid=${params.id}`)
      setSerie(result.data)
      
    }

   fetchData()
   

  }, [params.id]);


  return (
    
    <div className='episodes-list'>
        {serie.map((el) => (

        <Link to={`/episodes/${el.id}`}> 
        <div className='episode-cat' >
          <h4>{el.name}</h4>
          
          <img className='img-episode' src="/images/3.png" alt="" width={300}/>
          <img className='picture-episode' src={el.picture} alt="" width={30}/>
          
        </div>
        </Link>
        
        
    ))}
    

    </div>
    
  
  )
}

export default SeriesEpisodes

