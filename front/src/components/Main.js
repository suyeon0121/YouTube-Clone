import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDTD6oo-AVHB1WLogB7yO5BoUlZFOGm25A';

function YoutubeMain() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                // 1. search API로 영상 리스트 받기
                const searchRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        maxResults: 20,
                        type: 'video',
                        key: API_KEY,
                    }
                });

                const videoIds = searchRes.data.items.map(item => item.id.videoId).join(',');

                // 2. videos API로 상세정보 받기
                const videosRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        part: 'snippet,statistics',
                        id: videoIds,
                        key: API_KEY,
                    }
                });

                setVideos(videosRes.data.items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div className="video-grid">
            {videos.map(video => (
                <div key={video.id} className="video-card">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.channelTitle}</p>
                    <p>{Number(video.statistics.viewCount).toLocaleString()} 조회수</p>
                    <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default YoutubeMain;
