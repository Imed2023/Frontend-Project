import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';


function PlayerSeries({episode}) {

  const params=useParams()

    
  const StreamUrl = "http://ipfoxes.com:8080/series/Etronics_siDLuZ/zB72PeaG/";
  const StreamExt = '.mp4';
  const streamid = params.id
  
  const playurl = `${StreamUrl}${streamid}${StreamExt}`;


    

  return (
    <div className='series-player'>
        
        <ReactPlayer url={playurl}
        controls volume={1} playing="true" 
        playsinline
        width="90vw"
        height="90vh"/>


    </div>
  )
}

export default PlayerSeries