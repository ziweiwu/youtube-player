import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" 
                    src={url} 
                    title="youtube player"
                    allowFullScreen="allowfullscreen"
                    frameBorder="0"
                />
            </div>
            <div className="details" >
                <div className = "video_title">{video.snippet.title}</div>
                <div className = "video_info">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
