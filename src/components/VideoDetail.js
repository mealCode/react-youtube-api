import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) return <div></div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return ( 
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header"><div>{video.snippet.title}</div></h4>
            </div>
            <p>{video.snippet.description}</p>
        </div>
     );
}
 
export default VideoDetail;