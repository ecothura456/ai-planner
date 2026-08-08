package com.aiplanner.ai_planner_backend.controller;

import com.aiplanner.ai_planner_backend.dto.TravelPlanRequest;
import com.aiplanner.ai_planner_backend.service.GeminiService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @GetMapping("/test")
    public String testGemini() {
        return geminiService.testGemini();
    }

     @PostMapping("/generate")
    public String generateTravelPlan(
           @Valid @RequestBody TravelPlanRequest request
    ) {
        return geminiService.generateTravelPlan(
                request.getDeparture(),
                request.getArrival(),
                request.getStartDate(),
                request.getEndDate(),
                request.getBudget(),
                request.getTransportation(),
                request.getInterests(),
                request.getAdditionalRequest()
        );
    }
}