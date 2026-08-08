package com.aiplanner.ai_planner_backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TravelPlanRequest {
     @NotBlank(message = "Departure is required.")
    private String departure;
    @NotBlank(message = "Arrival is required.")
    private String arrival;
    @NotBlank(message = "Start date is required.")
    private String startDate;
    @NotBlank(message = "End date is required.")
    private String endDate;
    @NotNull(message = "Budget is required.")
    @Positive(message = "Budget must be greater than 0.")
    private Double budget;
    @NotBlank(message = "Transportation is required.")
    private String transportation;
    private String interests;
    private String additionalRequest;
}