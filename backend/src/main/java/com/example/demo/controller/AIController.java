package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.services.AIService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/ai")
public class AIController {

    @Autowired
    private AIService aiService;

    @GetMapping("/ask")
    public String askAI(@RequestParam String query) {
        return aiService.getAIResponse(query);
    }
}
