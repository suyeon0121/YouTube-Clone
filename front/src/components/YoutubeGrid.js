import React, { useEffect, useState } from "react";
import { searchVideos } from "../api/YoutubeApi";
import VideoCard from './VideoCard';
import "./YoutubeGrid.scss";

function YoutubeGrid({ searchQuery }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const query = searchQuery || "뉴스"; // searchQuery 없으면 기본
            const result = await searchVideos(query);
            setVideos(result);
        };
        fetchVideos();
    }, [searchQuery]);

    return (
        <div className="video-grid">
            {videos.map(video => <VideoCard key={video.videoId} video={video} />)}
        </div>
    );
};

export default YoutubeGrid;
