package com.demo.news.service;
import com.demo.news.model.NewsResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
public class NewsService {

    @Value("${newsapi.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public NewsResponse fetchNews(String query, String sortBy) {
        URI uri = UriComponentsBuilder.fromHttpUrl("https://newsapi.org/v2/everything")
                .queryParam("q", query)
                .queryParam("language", "en")
                .queryParam("sortBy", sortBy)
                .queryParam("apiKey", apiKey)
                .build()
                .toUri();

        return restTemplate.getForObject(uri, NewsResponse.class);
    }
}
