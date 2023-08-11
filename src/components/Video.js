import React from 'react'

function selectVideo(videoIdObj,onVideoSelected){
    onVideoSelected(videoIdObj.videoId)
}

function getCss(imageUrl){
    const _styles={
        backgroundImage: `url(${imageUrl})`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        height:"180px",
        position:"relative"
    };
    return _styles
}
function constructVideoTitles(videoData,onVideoSelected){
    return videoData.map(({snippet,id},index)=>{
        return(
            <div className='video' key={index} onClick={()=> selectVideo(id,onVideoSelected)}>
                <div style={getCss(snippet.thumbnails.high.url)} key={index}></div>
                <p className='title'>{snippet.title}</p>
            </div>
        )
    })
}

const Video = ({data,onVideoSelected}) => {
    return (
        <div style={{width:"fit-content",cursor:"pointer",boxSizing:" border-box"}}>
            {constructVideoTitles(data,onVideoSelected)}
        </div>
    )
}

export default Video
