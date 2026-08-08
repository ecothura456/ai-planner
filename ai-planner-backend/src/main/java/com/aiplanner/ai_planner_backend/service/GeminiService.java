package com.aiplanner.ai_planner_backend.service;

import com.aiplanner.ai_planner_backend.util.PromptBuilder;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    private final Client client;
    private final String model;
    private final PromptBuilder promptBuilder;

    public GeminiService(
            @Value("${gemini.api.key}") String apiKey,
            @Value("${gemini.model}") String model,
            PromptBuilder promptBuilder
    ) {
        this.client = Client.builder()
                .apiKey(apiKey)
                .build();

        this.model = model;
        this.promptBuilder = promptBuilder;
    }

    public String testGemini() {
        GenerateContentResponse response =
                client.models.generateContent(
                        model,
                        "Say hello in one short sentence.",
                        null
                );

        return response.text();
    }

    public String generateTravelPlan(
        String departure,
        String arrival,
        String startDate,
        String endDate,
        Double budget,
        String transportation,
        String interests,
        String additionalRequest
) {

    String prompt = promptBuilder.buildTravelPlanPrompt(departure, arrival, startDate, endDate, budget, transportation, interests, additionalRequest);

    GenerateContentResponse response =
            client.models.generateContent(
                    model,
                    prompt,
                    null
            );

    return response.text();
}
}