import axios from "axios";

const BASE_URL = "http://localhost:8080/api/youtube";

export const searchVideos = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {q: query}
        });
        return response.data;
    } catch (error) {
        console.error("유튜브 검색 API 오류:", error);
        return [];
    }
};