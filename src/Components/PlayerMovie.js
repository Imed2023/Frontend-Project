import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';


function PlayerMovie() {

  const params=useParams()

    
    const StreamUrl = "http://live2022.business:8080/movie/mac_5590187/637d28d47a928/";
    const StreamExt = '.mp4';
    const streamid = params.id
    
    const playurl = `${StreamUrl}${streamid}${StreamExt}`;


  return (
    <div className='movie-player'>
        
        <ReactPlayer url={playurl}
        controls volume={1} playing="true" 
        playsinline
        width="90vw"
        height="90vh"

        />


    </div>
  )
}

export default PlayerMovie