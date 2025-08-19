package back.back.service;

import back.back.dto.YoutubeVideoDto;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class YoutubeService {

    @Value("${youtube.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public YoutubeService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public List<YoutubeVideoDto> searchVideos(String query) {
        try {
            // 1) 쿼리 한글 안전하게 인코딩
            String encodedQuery = URLEncoder.encode(query, StandardCharsets.UTF_8);

            // 2) URL 생성
            URI uri = UriComponentsBuilder
                    .fromHttpUrl("https://www.googleapis.com/youtube/v3/search")
                    .queryParam("part", "snippet")
                    .queryParam("type", "video")
                    .queryParam("maxResults", 20)
                    .queryParam("q", encodedQuery)  // 인코딩된 값 사용
                    .queryParam("regionCode", "KR")
                    .queryParam("relevanceLanguage", "ko")
                    .queryParam("key", apiKey)
                    .build(true)
                    .toUri();

            // 3) REST 호출
            ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);

            // 4) JSON 파싱
            JsonNode root = objectMapper.readTree(response.getBody());
            JsonNode items = root.path("items");

            List<YoutubeVideoDto> result = new ArrayList<>();
            if (items.isArray()) {
                for (JsonNode item : items) {
                    String videoId = item.path("id").path("videoId").asText("");
                    JsonNode snippet = item.path("snippet");
                    String title = snippet.path("title").asText("");
                    String channelTitle = snippet.path("channelTitle").asText("");
                    String description = snippet.path("description").asText("");
                    String publishedAt = snippet.path("publishedAt").asText("");

                    // 썸네일: medium 우선, 없으면 high/default
                    String thumbMedium = snippet.path("thumbnails").path("medium").path("url").asText("");
                    String thumbHigh = snippet.path("thumbnails").path("high").path("url").asText("");
                    String thumbDef = snippet.path("thumbnails").path("default").path("url").asText("");
                    String thumbnailUrl = !thumbMedium.isEmpty() ? thumbMedium :
                            !thumbHigh.isEmpty() ? thumbHigh : thumbDef;

                    if (!videoId.isEmpty()) {
                        YoutubeVideoDto dto = new YoutubeVideoDto();
                        dto.setVideoId(videoId);
                        dto.setTitle(title);
                        dto.setChannelTitle(channelTitle);
                        dto.setThumbnailUrl(thumbnailUrl);
                        dto.setDescription(description);
                        dto.setPublishedAt(publishedAt);
                        result.add(dto);
                    }
                }
            }

            return result;

        } catch (HttpStatusCodeException e) {
            // YouTube API 오류
            String body = e.getResponseBodyAsString();
            throw new RuntimeException("[YouTube API 오류] status=" + e.getStatusCode() + ", body=" + body, e);
        } catch (Exception e) {
            throw new RuntimeException("[YouTube API 호출/파싱 실패] " + e.getMessage(), e);
        }
    }
}
