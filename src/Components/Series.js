import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';






function Series() {
 

  const [channel, setChannel] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () =>{
      let result = await axios.get("https://api.ipfox.co/ipfox-v5/ok.php?mode=seriescat&code=7701120605587496&mac=3034D2291532&serial=%s")
      setChannel(result.data)
      
      setIsLoading(false);
    }

   fetchData()
   

  }, []);
  const spinnerStyle = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const placeholderImage ="/images/no_movie.jpg"
  return (
    
    <div className='series-listall'>
      <div className='search-bar'>
      <img src='/images/find.png' alt='find'/>
        <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for a serie..."
                onChange={(e) => setQuery(e.target.value)}
                
              />
       
      </div>
      
      <div className='series-list'>      
     <RingLoader color={'white'} loading={isLoading} css={spinnerStyle} size={150} />
    
      
    {channel.filter(el=>el.name.toLowerCase().includes(query))
      .map((el)=> (
        <div className='series-cat' >
          <Link to={`/series/${el.id}`}>
          <img className='img-seriescat' src={el.picture ? el.picture: placeholderImage } alt="" />
          </Link>
        </div>
        
    ))}
    

    </div>
    </div>
  )
}

export default Series