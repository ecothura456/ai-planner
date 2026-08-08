package com.aiplanner.ai_planner_backend.util;

import org.springframework.stereotype.Component;

@Component
public class PromptBuilder {

    public String buildTravelPlanPrompt(
            String departure,
            String arrival,
            String startDate,
            String endDate,
            Double budget,
            String transportation,
            String interests,
            String additionalRequest
    ) {
        return """
                You are a professional travel planner.

                Create a simple and practical travel itinerary using the following information:

                Departure: %s
                Destination: %s
                Start date: %s
                End date: %s
                Budget: %s JPY
                Transportation: %s
                Interests: %s
                Additional request: %s

                Please include:
                1. A day-by-day itinerary
                2. Recommended places
                3. Transportation suggestions
                4. Estimated costs
                5. Food recommendations
                6. Useful travel tips

                Keep the answer clear and easy to read.
                """.formatted(
                departure,
                arrival,
                startDate,
                endDate,
                budget,
                transportation,
                interests,
                additionalRequest
        );
    }
}