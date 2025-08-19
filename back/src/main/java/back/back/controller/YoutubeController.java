package back.back.controller;

import back.back.dto.YoutubeVideoDto;
import back.back.service.YoutubeService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/youtube")
@CrossOrigin(origins = "http://localhost:3000")

public class YoutubeController {
    private final YoutubeService youtubeService;
    public YoutubeController(YoutubeService youtubeService) {
        this.youtubeService = youtubeService;
    }

    @GetMapping("/search")
    public List<YoutubeVideoDto> search(@RequestParam("q") String query) {
        return youtubeService.searchVideos(query);
    }
}
