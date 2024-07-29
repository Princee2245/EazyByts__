package com.demo.news.controller;
import com.demo.news.model.NewsResponse;
import com.demo.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping("/news")
    public NewsResponse getNews(@RequestParam(defaultValue = "Latest") String query, @RequestParam(defaultValue = "publishedAt") String sortBy) {
        return newsService.fetchNews(query, sortBy);
    }

    @GetMapping("/{category}")
    public NewsResponse getTechNews(@PathVariable String category, @RequestParam(defaultValue = "publishedAt") String sortBy){
        return newsService.fetchNews(category,sortBy);
    }

}
