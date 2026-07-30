package com.example.demo.services;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class AIService {

    // Use your real Gemini API key here
    private static final String GEMINI_API_KEY = "AIzaSyDR1hRvO7O1KaFAYHd3CltGvuK3yQIwmTg"; 
    private static final String GEMINI_URL =
            "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" + GEMINI_API_KEY;
 

    public String getAIResponse(String prompt) {
        try {
            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            // Construct request body
            Map<String, Object> message = Map.of("parts", List.of(Map.of("text", prompt)));
            Map<String, Object> requestBody = Map.of("contents", List.of(message));

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

            // Make POST request
            ResponseEntity<Map> response = restTemplate.exchange(
                    GEMINI_URL, HttpMethod.POST, entity, Map.class
            );

            // Extract response
            List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
            Map<String, Object> content = (Map<String, Object>) candidates.get(0).get("content");
            List<Map<String, Object>> parts = (List<Map<String, Object>>) content.get("parts");

            return parts.get(0).get("text").toString().trim();

        } catch (Exception e) {
            return "Error calling Gemini API: " + e.getMessage();
        }
    }
}
