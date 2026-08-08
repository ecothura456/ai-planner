package com.aiplanner.ai_planner_backend.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String departure;
    private String arrival;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double budget;
    private String transportation;
    private String interests;
    @Column(columnDefinition =  "TEXT")
    private String additionalRequest;
    @Column(columnDefinition =  "TEXT")
    private String aiResult;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
