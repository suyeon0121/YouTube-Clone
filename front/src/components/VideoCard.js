import React from "react";
import "./VideoCard.scss";

const VideoCard = ({video}) => {
    return (
        <div className="video-card">
            <img src={video.thumbnailUrl} alt={video.title}/>
            <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.channelTitle}</p>
                <small>{new Date(video.publishedAt).toLocaleDateString()}</small>
            </div>
        </div>
    );
};

export default VideoCard;