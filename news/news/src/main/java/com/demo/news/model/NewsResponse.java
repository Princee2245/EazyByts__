package com.demo.news.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class NewsResponse {
    private List<Article> articles;

    @Setter
    @Getter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Article {
        private String title;
        private String description;
        private String url;

    }
}

