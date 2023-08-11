import React from 'react'
import Video from './Video'

const VideoList = ({data,onVideoSelected}) => {
  return (
    <div className='video-list'>
        <div style={{padding: "20px 0px"}}>
            <h3 style={{textAlign:"center", fontSize:"18px", fontWeight:"400"}}>Videos List</h3>
            <Video data={data} onVideoSelected={onVideoSelected}/>
        </div>
    </div>
  )
}

export default VideoList