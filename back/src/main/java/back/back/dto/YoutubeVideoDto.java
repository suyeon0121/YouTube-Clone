package back.back.dto;

public class YoutubeVideoDto {
    private String videoId;
    private String title;
    private String channelTitle;
    private String thumbnailUrl;
    private String description;
    private String publishedAt;

    public String getVideoId() {return videoId;}
    public void setVideoId(String videoId) {this.videoId = videoId;}

    public String getTitle() {return title;}
    public void setTitle(String title) {this.title = title;}

    public String getChannelTitle() {return channelTitle;}
    public void setChannelTitle(String channelTitle) {this.channelTitle = channelTitle;}

    public String getThumbnailUrl() {return thumbnailUrl;}
    public void setThumbnailUrl(String thumbnailUrl) {this.thumbnailUrl = thumbnailUrl;}

    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}

    public String getPublishedAt() {return publishedAt;}
    public void setPublishedAt(String publishedAt) {this.publishedAt = publishedAt;}
}
