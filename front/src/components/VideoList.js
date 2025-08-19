import React from "react";
import "../YoutubeGrid.scss";
import VideoCard from "./VideoCard";

const VideoList = ({videos}) => {
    return (
        <div className="video-grid">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video}/>
            ))}
        </div>
    );
};

export default VideoList;